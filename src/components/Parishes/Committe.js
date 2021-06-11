import React from 'react'
import './Committe.css'
import avatar from "./avatar.svg"

const Committe = ({parish}) => {
    return (
        <div className="parish-committe">
            {parish.committee.map(member => (
            <div className="member-container">
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">{member.name}</h2>
                    <p className="member-position">{member.position}</p>
                    {member.phoneNumber.map(phone => (
                    <p className="member-contact">{phone}</p>
                    ))}
                </div>
            </div>
            ))}

            
        </div>
    )
}

export default Committe
