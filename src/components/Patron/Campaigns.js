import React from 'react'
import Camp from '../Campaigns/Campaigns'

const Campaigns = ({patron}) => {
    let ids = patron.campaigns
    return (
        <Camp ids={ids}/>
    )
}

export default Campaigns
