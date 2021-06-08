import { useParams } from "react-router"
import getRequest from "../../API/getRequest"
import { useEffect, useState } from 'react'
import { createImgURL } from "../../API/utilities"


const CampaignDetails = () => {
    const [campaignData, setcampaignData] = useState()
    const {id} = useParams()
    useEffect(() => {
        getRequest(`http://localhost:5000/api/get-campaign/${id}`)
        .then(res => {
            console.log(res)
            setcampaignData(res.data)
        })
        .catch(err => console.log(err))
    }, [])
    
    if(!campaignData){
        return (
            <div className="isLoading">
                <h1>Loading...</h1>
            </div>
        )
    }
    return (
        <div>
            <img style={{width: "100px"}} className="img" src={createImgURL(campaignData)} alt="" />
            <h1>{campaignData.title}</h1>
            <p>{campaignData.content}</p>
            <p>{campaignData.fundRaiser}</p>
            <h2><span>Rs {campaignData.moneyCollected} </span> raised out of Rs {campaignData.totalAmount}</h2>
        </div>
    )
}

export default CampaignDetails
