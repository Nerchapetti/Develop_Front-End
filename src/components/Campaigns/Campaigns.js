import { useEffect, useState } from "react";
import './Campaigns.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faClock, faHeart } from '@fortawesome/free-solid-svg-icons'
import getRequest from "../../API/getRequest";
import { createImgURL, toBase64 } from "../../API/utilities";
import { Link } from "react-router-dom";

const Campaigns = () => {
    const [campaignData, setCampaignData] = useState();

    useEffect(() => {
        getRequest('http://localhost:5000/api/get-all-campaigns')
        .then(data => {
            console.log(data)
            setCampaignData(data.data)
        })
        .catch(err => console.log(err))
    }, [])


    const createLink = (id) => {
        return `/campaign-details/${id}`
    }

    const arrowStyle = {
        color: '#1a73e8'
    }
    const handleLeftScroll = (e) => {
        document.querySelector('.campaign-container').scrollBy({
            top: 0,
            left: -700,
            behavior: 'smooth'
        })
    }

    const handleRightScroll = (e) => {
        document.querySelector('.campaign-container').scrollBy({
            top: 0,
            left: 700,
            behavior: 'smooth'
        })
    }


    if(!campaignData){
        return null
    }
    return ( 
        <div className="Campaigns">
            <h1 className="camp-title">Campaign</h1>

            <div className="left-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleLeft} size="3x"  onClick={handleLeftScroll} />
            </div>

            
                <div className="campaign-container">
                    { campaignData.map((data) => (
                    
                        
                        <Link to={createLink(data._id)}>
                        <div className="camp-container" key={data._id}>
                            <div className="camp-img">
                                <img className="img" src={createImgURL(data)} alt="" />
                            </div>
                            <div className="camp-details-container">
                                <div className="camp-heading">
                                    <h1 className="title">{data.title}</h1>
                                    <p>{data.content}</p>
                                </div>
                                <div className="organiser-details">
                                    <img src="https://kettocdn.gumlet.io/media/individual/1358000/1358229/image/5e58e4fc7b807.jpg?w=50&dpr=1.0" alt="" />
                                    <p>{data.fundRaiser}</p>
                                </div>

                                <div className="fund-details">
                                    <h2><span>Rs {data.moneyCollected} </span> raised out of Rs {data.totalAmount}</h2>
                                    <progress value="70" max="80"></progress>
                                </div>

                                <div className="extra-details">
                                    <div className="time-left">
                                        <p> <FontAwesomeIcon style={{color: 'grey'}} icon={faClock} /> 91 Days Left</p>
                                    </div>

                                    <div className="supporters">
                                        <p><FontAwesomeIcon style={{color: 'red'}} icon={faHeart} /> {data.supporters} Supporters</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>

            <div className="right-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleRight} size="3x" onClick={handleRightScroll}/>
            </div>
        </div>
     );
}
 
export default Campaigns;