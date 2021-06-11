import { faMailchimp } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faMale, faPhoneAlt, faPhoneSquare, faVoicemail } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { MailruIcon } from 'react-share'
import avatar from "./avatar.svg"
import "./family.css"

const Family = ({patron}) => {
    return (
        <div className="family">
              <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">Surya </h2>
                    <p className="member-position">Wife</p>
                    <p className="member-contact"><FontAwesomeIcon icon={faPhoneAlt}/> {"  "} 9747406685</p>
                    <p className="member-email"><FontAwesomeIcon icon={faMailBulk}/> {"  "} rahul@gmail.com</p>
                </div>
            </div>

            <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">Surya </h2>
                    <p className="member-position">Wife</p>
                    <p className="member-contact"><FontAwesomeIcon icon={faPhoneAlt}/> {"  "} 9747406685</p>
                    <p className="member-email"><FontAwesomeIcon icon={faMailBulk}/> {"  "} rahul@gmail.com</p>
                </div>
            </div>

            <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">Surya </h2>
                    <p className="member-position">Wife</p>
                    <p className="member-contact"><FontAwesomeIcon icon={faPhoneAlt}/> {"  "} 9747406685</p>
                    <p className="member-email"><FontAwesomeIcon icon={faMailBulk}/> {"  "} rahul@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Family
