import React from 'react'
import Likes from '../Likes/Likes'
import "./About.css"


const About = ({parish}) => {
    return (
        <div className="parish-about">
            <h1 className="churchName">{parish.about.churchName}</h1>
            <img className="img" src={parish.imageUrl} alt="" />
            <Likes id={parish._id} likes={parish.likes} likeFor="parish"/>
            <p dangerouslySetInnerHTML={ {__html: parish.about.content} }></p>
        </div>
    )
}

export default About
