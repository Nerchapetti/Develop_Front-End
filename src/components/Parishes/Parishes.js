import { useState, useEffect } from "react";
import "./Parishes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";
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

const Parishes = ({ ids }) => {
  const [Parishesdata, setParishesdata] = useState();
  const [Parishes, setParishes] = useState([]);
  useEffect(() => {
    if (!ids) {
      getRequest("http://localhost:5000/get-all-parishes").then((data) => {
        setParishesdata(data.data);
        console.log(data);
        localStorage.setItem("parishes", JSON.stringify(data.data));
      });
    }
  }, []);

  useEffect(() => {
    if (ids) {
      if (localStorage.getItem("parishes")) {
        console.log(ids);
        console.log("============================");
        setParishes([]);

        ids.forEach((i) => {
          let newP = JSON.parse(localStorage.getItem("parishes")).find(
            (p) => p._id === i
          );
          console.log(newP);
          setParishes((state) => [...state, newP]);
        });
      } else {
        getRequest("http://localhost:5000/get-all-parishes").then((data) => {
          setParishesdata(data.data);
          console.log(data);
          localStorage.setItem("parishes", JSON.stringify(data.data));
        });
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

  if (!Parishes) {
    return (
      <div className="isLoading">
        <h1>Loading...</h1>
      </div>
    );
  }

  const handleClick = (id) => {
    window.location = `/parish-details/${id}`;
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
          <Link
            to={`/parish-details/${data._id}`}
            onClick={() => handleClick(data._id)}
          >
            <div className="cards" key={data._id}>
              <div className="images">
                <img src={createImgURL(data)} alt="" />
              </div>
              <div className="catagory">{data.churchcategory}</div>
              <div className="churchname">{data.churchName}</div>
              <div className="about">{data.content}</div>
              <div className="location">
                <p>location : {data.location}</p>
              </div>
              <div className="share">
                <WhatsappShareButton url="http://nerchapetti.com">
                  <FontAwesomeIcon className="shareicon" icon={faShareAlt} />{" "}
                </WhatsappShareButton>
              </div>
            </div>
          </Link>
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
