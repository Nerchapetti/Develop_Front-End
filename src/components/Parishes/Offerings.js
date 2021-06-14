import React from 'react'

const Offerings = ({parish}) => {
    return (
        <div className="parish-committe">
        {parish.offerings.map((offer, i) => (
        <div className="member-container" key={i}>
            <div className="member-details">
                <h2 className="name">{offer.Name}</h2>
                <p className="member-position"dangerouslySetInnerHTML={ {__html: offer.details} }></p>
                <p>RS. {offer.price}</p>
            </div>
        </div>
        ))}

        
    </div>
    )
}

export default Offerings
