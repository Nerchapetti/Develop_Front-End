import { useState } from "react";
import './Campaigns.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faClock, faHeart } from '@fortawesome/free-solid-svg-icons'


const Campaigns = () => {
    const [Parishesdata, newdata] = useState([
        {id : 1, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},
        {id : 2, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},
        {id : 3, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},
        {id : 4, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},
        {id : 1, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},
        {id : 2, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},
        {id : 3, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},
        {id : 4, image : "image" , category : "churchcatagory" , heading : "help her fight" , paraghaph : "ddddd" ,organiser : "hi i am rahul", amount : "10k", like : "20" , time : 20, other : 20,  persontage: "80%"},

    ]);

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

    return ( 
        <div className="Campaigns">
            <h1 className="camp-title">Campaign</h1>

            <div class="left-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleLeft} size="3x"  onClick={handleLeftScroll} />
            </div>

            
                <div className="campaign-container">
                    { Parishesdata.map((data) => (
                        <div className="camp-container">
                            <div className="camp-img">
                                <img className="img" src="http://nerchapetti.com/l.jpg" alt="" />
                            </div>
                            <div className="camp-details-container">
                                <div className="camp-heading">
                                    <h1 className="title">{data.heading}</h1>
                                    <p>{data.paraghaph}</p>
                                </div>
                                <div className="organiser-details">
                                    <img src="https://kettocdn.gumlet.io/media/individual/1358000/1358229/image/5e58e4fc7b807.jpg?w=50&dpr=1.0" alt="" />
                                    <p>By some name</p>
                                </div>

                                <div className="fund-details">
                                    <h2><span>Rs 70000 </span> raised out of Rs 80000</h2>
                                    <progress value="70" max="80"></progress>
                                </div>

                                <div className="extra-details">
                                    <div className="time-left">
                                        <p> <FontAwesomeIcon style={{color: 'grey'}} icon={faClock} /> 91 Days Left</p>
                                    </div>

                                    <div className="supporters">
                                        <p><FontAwesomeIcon style={{color: 'red'}} icon={faHeart} /> 3790 Supporters</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            <div class="right-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleRight} size="3x" onClick={handleRightScroll}/>
            </div>
        </div>
     );
}
 
export default Campaigns;