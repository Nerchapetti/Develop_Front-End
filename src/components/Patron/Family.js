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

            {patron.family.map(member => (

              <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">{member.name} </h2>
                    <p className="member-position">{member.relation}</p>
                    <p className="member-contact"><FontAwesomeIcon icon={faPhoneAlt}/> {"  "} {member.contactNumber}</p>
                    <p className="member-email"><FontAwesomeIcon icon={faMailBulk}/> {"  "} {member.email}</p>
                </div>
            </div>

            ))}

           
        </div>
    )
}

export default Family
