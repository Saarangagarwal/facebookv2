import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import multer from 'multer'
import {GridFsStorage} from 'multer-gridfs-storage'
import Grid from 'gridfs-stream'
import bodyParser from 'body-parser'
import path from 'path'
import Pusher from 'pusher'

import mongoPosts from './postModel.js'

Grid.mongo = mongoose.mongo

// app config
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
    appId: "1307440",
    key: "e9d65ecd8ef70a6e12e1",
    secret: "e711bdf385cdd2cffd9a",
    cluster: "us2",
    useTLS: true
  });

// middlewares
app.use(bodyParser.json()); 
app.use(cors())

// db config
const mongoURI = 'mongodb+srv://admin:Y4CP0o32NOzheJnR@cluster0.yhmia.mongodb.net/facebookv2-db?retryWrites=true&w=majority'

const conn = mongoose.createConnection(mongoURI, {
   // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let gfs

conn.once('open', () => {
    console.log("DB connected")
    gfs = Grid(conn.db, mongoose.mongo)
    gfs.collection('images')
})

const storage = new GridFsStorage({
    url: mongoURI,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = `image-${Date.now()}${path.extname(file.originalname)}`

            const fileInfo = {
                filename: filename,
                bucketName: 'images'
            };

            resolve(fileInfo);
        });
    }
});

const upload = multer({ storage })

mongoose.connect(mongoURI, {
  //  useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once('open', () => {
    console.log("DB connected")

    const changeStream = mongoose.connection.collection('posts').watch()

    changeStream.on('change', (change) => {
        console.log(change)

        if(change.operationType==='insert') {
            console.log("pusher insert trigger")

            pusher.trigger('posts', 'inserted', {
                change: change
            })
        } else {
            console.log("There was an error in triggering pusher!")
        }
    })
})

// api routes
app.get('/', (req, res) =>
 res.status(200)
 .send('Welcome to the facebook v2 backend!'));

app.post('/upload/image', upload.single('file'), (req, res) => {
    res.status(201).send(req.file)
})

app.post('/upload/post', (req, res) => {
    const dbPost = req.body
    
    mongoPosts.create(dbPost, (err, data) => {
        if (err) {
            // internal server error
            res.status(500).send(err)
        } else {
            // created
            res.status(201).send(data)
        }
    })
})

//idea:
//save the image then save post (with image name) 
//retrieve post, grab image name, grab the image itself

app.get('/retrieve/posts', (req, res) => {
    mongoPosts.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        } else {
            //sort the data based on the timestamp
            data.sort((b, a) => {
                return a.timestamp - b.timestamp
            })
            res.status(200).send(data)
        }
    })
})

app.get('/retrieve/images/single', (req, res) => {
    gfs.files.findOne({filename: req.query.name}, (err, file) => {
        if(err) {
            res.status(500).send(err)
        } else {
            if(!file || file.length === 0) {
                res.status(404).json({err: 'Error! File not found!'})
            } else {
                const readstream = gfs.createReadStream(file.filename);
                readstream.pipe(res)
            }
        }
    })
})

// listener
app.listen(port, () => console.log(`listening on local host: ${port}`))
