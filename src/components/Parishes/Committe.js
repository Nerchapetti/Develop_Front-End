import React from 'react'
import './Committe.css'
import avatar from "./avatar.svg"
import CoreCommittee from './CoreCommittee'

const Committe = ({parish}) => {
    console.log(parish);
    return (
        <div className="parish-committe">
            <div className="core-committe">
                <CoreCommittee member={parish.vicar} title="Vicar" />
                <CoreCommittee member={parish.covicar} title="Covicar" />
                <CoreCommittee member={parish.trustee} title="Trustee" />
                <CoreCommittee member={parish.secretary} title="Secretary" />
                <CoreCommittee member={parish.accountant} title="Accountant" />

            </div>
            <h1 className="heading">Committee Members</h1>
            {parish.committee.map((member, i) => (
            <div className="member-container" key={i}>
                <div className="image">
                    <img src={avatar} alt="" />
                </div>
                <div className="member-details">
                    <h2 className="name">{member.name}</h2>
                    <p className="member-position">{member.position}</p>
                    {member.phoneNumber.map((phone, i) => (
                    <p className="member-contact" key={i}>{phone}</p>
                    ))}
                </div>
            </div>
            ))}

            
        </div>
    )
}

export default Committe
