import { useState } from "react";
import './Parishes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faShareAlt } from "@fortawesome/free-solid-svg-icons";
import getRequest from "../../API/getRequest";


const Parishes = () => {
    const [Parishesdata, setParishesdata] = useState([]);

    getRequest('http://localhost:5000/get-all-parishes')
    .then(data => setParishesdata(data.data))
     

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

    const toBase64 = (arr) => {
        return btoa(
            arr.reduce((data, byte) => data + String.fromCharCode(byte), '')
        )
    }

    const createImgURL = (data) => {
        return `data:image/${data.image.contentType};base64,${toBase64(data.image.data.data)}`
    }

    const handleRightScroll = (e) => {
        document.querySelector('.Parishes-containor').scrollBy({
            top: 0,
            left: 700,
            behavior: 'smooth'
        })
    }
    return ( 
        <div className="parishes">
            <h1 className="pari-title">Parish</h1>
            <div className="left-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleLeft} size="3x"  onClick={handleLeftScroll} />
            </div>
            <div className="Parishes-containor">
                { Parishesdata.map((data) => (
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
                        <FontAwesomeIcon className = "shareicon" icon={faShareAlt} /> 
                        </div>
                    </div>
                    
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