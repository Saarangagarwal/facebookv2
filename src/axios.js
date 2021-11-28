import axios from 'axios'

const instance = axios.create({
    //baseURL: 'http://localhost:9000'
    baseURL: 'http://facebookv20.herokuapp.com'
})

export default instance