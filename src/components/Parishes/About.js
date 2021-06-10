import React from 'react'
import { createImgURL } from '../../API/utilities'
import "./About.css"


const About = ({parish}) => {
    return (
        <div className="parish-about">
            <h1 className="churchName">{parish.churchName}</h1>
            <img className="img" src={createImgURL(parish)} alt="" />
            <p>{parish.content}</p>
        </div>
    )
}

export default About
