import React from 'react'

const Family = ({patron}) => {
    return (
        <div className="family">

        {patron.family.map(family => (

            <ul class="list">
                <li>{family.member}:  <br/><span>{family.memberName}</span></li>
                <li>Phone: <br/><span> 9447661961 , 9417261322</span></li>
                <li>gmail <br/><span> abc@gmail.com </span></li>
            </ul>
        ))}
        </div>
    )
}

export default Family
