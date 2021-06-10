import React from 'react'

const Family = ({patron}) => {
    return (
        <div className="family">

        {patron.family.map(family => (

            <ul class="list-family">
                ........................
                ....................
                ........
            </ul>
        ))}
        </div>
    )
}

export default Family
