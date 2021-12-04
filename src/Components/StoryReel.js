import React from 'react'
import Story from './Story'
import './StoryReel.css'

const StoryReel = () => {
    return (
        <div className='storyReel' >
            <Story
                image='https://assets.yellowtrace.com.au/wp-content/uploads/2019/07/25141848/Abstract-Portrait-Paintings-by-Joseph-Lee-Yellowtrace-05.jpg'
                profileSrc='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8o03lsByTSoFsUQKW5sNiMnd4nT5T_NYRyg&usqp=CAU'
                title='Player 456'
            />
            <Story
                image='https://cdn.shopify.com/s/files/1/0128/3672/products/DIMENSIONAL_ABSTRACT_PORTRAIT_no._IV_1024x1024.png?v=1507719723'
                profileSrc='https://images.thebrag.com/dbu/uploads/2020/07/DuaLipa.jpg'
                title='Client 123'
            />
            <Story
                image='https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/119733779/original/cc2e5944473be8570911a5f558f0d28a150e3cdc/paint-you-a-custom-abstract-portrait-drawing-illustration.png'
                profileSrc='https://assets.dragoart.com/images/24514_501/how-to-draw-doja-cat_5f0a42fb5c9b22.73736716_226997_1_3.png'
                title='User 789'
            />

        </div>
    )
}

export default StoryReel
