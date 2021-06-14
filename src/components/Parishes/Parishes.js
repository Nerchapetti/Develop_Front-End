import { useState, useEffect } from "react";
import "./Parishes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
import getRequest from "../../API/getRequest";
import { Link } from "react-router-dom";
import {
  WhatsappShareButton,
} from "react-share";
import Likes from "../Likes/Likes";

const Parishes = ({ ids }) => {
  const [Parishesdata, setParishesdata] = useState();
  const [Parishes, setParishes] = useState([]);
  const [error, seterror] = useState("")
  const [isLoading, setisLoading] = useState(false)

  useEffect(() => {
    if (!ids) {
      getRequest(`${window.URI}/get-all-parishes`).then((data) => {
        if(data.status === 'ok'){
          setParishesdata(data.data);
          console.log(data);
          
        }
        else{
          seterror("some internal server error")
          console.log(data)
        }
      }).catch(err => {
        seterror(err)
      })
    }
  }, []);

  useEffect(() => {
    if (ids) {
      setisLoading(true)
      if (Parishesdata) {
        console.log(ids);
        console.log("============================");
        setParishes([]);

        ids.forEach((i) => {
          let newP = Parishesdata.find(
            (p) => p._id === i
          );
          console.log(newP);
          setParishes((state) => [...state, newP]);

        });
        setisLoading(false)
      } else {
        getRequest(`${window.URI}/get-all-parishes`).then((data) => {

          if(data.status === "ok"){
            setParishesdata(data.data);
            console.log(data);
           
          }
          else{
            seterror("some internal server error")
            console.log(data);
          }
        }).catch(err => {
          seterror(err)
        })
      }
    } else {
      console.log("||||||||||||||||||||||");
      console.log(Parishesdata);
      let p = Parishesdata;
      setParishes(p);
      console.log(Parishes);
    }
  }, [Parishesdata]);

  const arrowStyle = {
    color: "#1a73e8",
  };
  const handleLeftScroll = (e) => {
    document.querySelector(".Parishes-containor").scrollBy({
      top: 0,
      left: -700,
      behavior: "smooth",
    });
  };

  const handleRightScroll = (e) => {
    document.querySelector(".Parishes-containor").scrollBy({
      top: 0,
      left: 700,
      behavior: "smooth",
    });
  };

  if(isLoading){
    return <div className="isLoading"></div>
  }

  if(error){
    return(
      <div className="error">
        oops! something went wrong
      </div>
    )
  }

  if (!Parishes) {
    return (
      <div className="isLoading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if(Parishes.length === 0){
    return(
      <div className="nothing">
        <h1>No Parishes Found</h1>
      </div>
    )
  }

  const handleClick = (id) => {
    window.location = `/parish-details/${id}/about`;
  };

  return (
    <div className="parishes">
      <h1 className="pari-title">Parish</h1>
      <div className="left-scroll">
        <FontAwesomeIcon
          style={arrowStyle}
          icon={faArrowAltCircleLeft}
          size="3x"
          onClick={handleLeftScroll}
        />
      </div>
      <div className="Parishes-containor">
        {Parishes.map((data) => (
            <div style={{position: 'relative'}} className="cards" key={data._id}>
              <div className="images">
                <img src={data.imageUrl} alt="" />
              </div>
          <Link
            to={`/parish-details/${data._id}/about`}
            onClick={() => handleClick(data._id)}
          >
              <div className="catagory">{data.about.churchcategory}</div>
              <div className="churchname">{data.about.churchName}</div>
              <div className="about" dangerouslySetInnerHTML={ {__html: data.about.content.slice(0,20)} }></div>
              <div className="location">
                <p>location : {data.about.location}</p>
              </div>
          </Link>
          <div className="likes-share">
          <Likes likes={data.likes} id={data._id} likeFor="parish"/>
              <div className="share">
                <WhatsappShareButton url="http://nerchapetti.com">
                  <FontAwesomeIcon className="shareicon" icon={faShareAlt} />{" "}
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="right-scroll">
        <FontAwesomeIcon
          style={arrowStyle}
          icon={faArrowAltCircleRight}
          size="3x"
          onClick={handleRightScroll}
        />
      </div>
    </div>
  );
};

export default Parishes;
