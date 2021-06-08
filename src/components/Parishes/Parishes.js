import { useState, useEffect } from "react";
import './Parishes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import getRequest from "../../API/getRequest";
import { createImgURL, toBase64 } from "../../API/utilities";
import { Link } from "react-router-dom";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";



const Parishes = () => {
    const [Parishesdata, setParishesdata] = useState();

    const shareButtonProps = {
        url: "https://github.com/greglobinski/react-custom-share",
        network: "Facebook",
        text: "Give it a try - react-custom-share component",
        longtext:
          "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
    };

    useEffect(() => {
        getRequest('http://localhost:5000/get-all-parishes')
        .then(data => {
            setParishesdata(data.data)
            console.log(data)
        })
       
        
    }, [])
     

    const arrowStyle = {
        color: '#1a73e8'
    }
    const handleLeftScroll = (e) => {
        document.querySelector('.Parishes-containor').scrollBy({
            top: 0,
            left: -700,
            behavior: 'smooth'
        })
    }

   

    const handleRightScroll = (e) => {
        document.querySelector('.Parishes-containor').scrollBy({
            top: 0,
            left: 700,
            behavior: 'smooth'
        })
    }

    if(!Parishesdata){
        return (
            <div className="isLoading">
                <h1>Loading...</h1>
            </div>
        )
    }

    return ( 
        <div className="parishes">
            <h1 className="pari-title">Parish</h1>
            <div className="left-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleLeft} size="3x"  onClick={handleLeftScroll} />
            </div>
            <div className="Parishes-containor">
                { Parishesdata.map((data) => (
                    <Link to={`/parish-details/${data._id}`}>
                        <div className ="cards" key={data._id}>
                            <div className="images">
                                <img src={createImgURL(data)} alt="" />
                            </div>
                            <div className="catagory">
                                    {data.churchcategory}
                            </div>
                            <div className="churchname">
                                {data.churchName}
                            </div>
                            <div className="about">
                                {data.content}
                            </div>
                            <div className="location">
                                <p>location : {data.location}</p>
                            </div>
                            <div className="share">
                            
                                
                                
                                <WhatsappShareButton url="http://nerchapetti.com"><FontAwesomeIcon className = "shareicon" icon={faShareAlt} /> </WhatsappShareButton>
                            
                            </div>
                        </div>
                    </Link>
                    
                ))
                }
        
            </div>
            <div className="right-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleRight} size="3x" onClick={handleRightScroll}/>
            </div>
        </div>
     );
}
export default Parishes;