import React from 'react'
import avatar from "./avatar.svg"

const CoreCommittee = ({member, title}) => {
    console.log(member);
    return (
        <>
        <div className="member-container">
            <div className="image">
                <img src={avatar} alt="" />
            </div>
            <div className="member-details">
                <h1 className="member-title">{title}</h1>
                <h2 className="name">{member.name}</h2>
                <p className="member-position">{member.email}</p>
                
                <p className="member-contact">{member.phoneNumber}</p>
            </div>
        </div>
       </>
    )
}

export default CoreCommittee
