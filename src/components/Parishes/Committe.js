import React from 'react'
import './Committe.css'
import avatar from "./avatar.svg"

const Committe = ({parish}) => {
    return (
        <div className="parish-committe">
            <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">Rahul T</h2>
                    <p className="member-position">kjfdkfd</p>
                    <p className="member-contact">9747406685</p>
                </div>
            </div>

            <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">Rahul T</h2>
                    <p className="member-position">kjfdkfd fdsfdsf fdsf fsdf</p>
                    <p className="member-contact">9747406685</p>
                </div>
            </div>
            <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">Rahul T</h2>
                    <p className="member-position">kjfdkfd</p>
                    <p className="member-contact">9747406685</p>
                </div>
            </div>
        </div>
    )
}

export default Committe
