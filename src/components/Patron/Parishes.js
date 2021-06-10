import React from 'react'
import Pari from "../Parishes/Parishes"
const Parishes = ({patron}) => {

    let ids = patron.parishes

    console.log(ids);

    return (
        <div>
            <Pari ids={ids} />
        </div>
    )
}

export default Parishes
