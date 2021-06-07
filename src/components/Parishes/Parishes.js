import { useState } from "react";
import './Parishes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight, faShareAlt } from "@fortawesome/free-solid-svg-icons";
const Parishes = () => {

    const [Parishesdata, setParishesdata] = useState([
        {id : 1, image : "image" , churchcategory : "churchcatagory" , church_name : "name of church" , location : "vatakara" , about : "hi i am rahul"},
        {id : 1, image : "image" , churchcategory : "churchcatogary" , church_name : "name of churchs" , location : "nadapuram" , about : "hai i am vyshnav"},
        {id : 1, image : "image" , churchcategory : "churchcatagory" , church_name : "name of church" , location : "vatakara" , about : "hi i am rahul"},
        {id : 1, image : "image" , churchcategory : "churchcatogary" , church_name : "name of churchs" , location : "nadapuram" , about : "hai i am vyshnav"},
        {id : 1, image : "image" , churchcategory : "churchcatagory" , church_name : "name of church" , location : "vatakara" , about : "hi i am rahul"},
        {id : 1, image : "image" , churchcategory : "churchcatogary" , church_name : "name of churchs" , location : "nadapuram" , about : "hai i am vyshnav"},
        

    ]);

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
    return ( 
        <div className="parishes">
            <h1 className="pari-title">Parish</h1>
            <div className="left-scroll">
                <FontAwesomeIcon style={arrowStyle} icon={faArrowAltCircleLeft} size="3x"  onClick={handleLeftScroll} />
            </div>
            <div className="Parishes-containor">
                { Parishesdata.map((data) => (
                    <div className ="cards" key={data.id}>
                        <div className="images">
                            <img className="img" src="http://nerchapetti.com/l.jpg" alt="" />
                        </div>
                        <div className="catagory">
                                {data.churchcategory}
                        </div>
                        <div className="churchname">
                            {data.church_name}
                        </div>
                        <div className="about">
                            {data.about}
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