import { useEffect, useState } from "react";
import avatar from "./avatar.svg"
import "./Campaigns.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faClock,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import getRequest from "../../API/getRequest";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Likes from "../Likes/Likes";

const Campaigns = ({ ids }) => {
  const [campaignData, setCampaignData] = useState();
  const [campaign, setcampaign] = useState([]);
  const [error, seterror] = useState("");
  const [isLoading, setisLoading] = useState(false)



  useEffect(() => {
    if (!ids) {
      getRequest(`${window.URI}/get-all-premium-campaigns`)
        .then((data) => {
          if (data.status === "ok") {
            console.log(data);
            setCampaignData(data.data);
            
          } else {
            seterror("some internal server error");
            console.log(data);
          }
        })
        .catch((err) => {
          seterror(err);
          console.log(err);
        });
    }
  }, [ids]);
  useEffect(() => {
    if (ids) {
      setisLoading(true)
      if (campaignData) {
        console.log(ids);
        console.log("============================");
        setcampaign([]);
        ids.forEach((i) => {
          let newP = campaignData.find(
            (p) => p._id === i
          );
          console.log(newP);
          setcampaign((state) => [...state, newP]);
        });
        setisLoading(false)
      } else {
        getRequest(`${window.URI}/get-all-campaigns`)
          .then((data) => {
            if (data.status === "ok") {
              console.log(data);
              setCampaignData(data.data);
              
            } else {
              seterror("some internal server error");
              console.log(data);
            }
          })
          .catch((err) => {
            seterror(err)
            console.log(err);

          });
      }
    } else {
      console.log("||||||||||||||||||||||");
      console.log(campaignData);
      let p = campaignData;
      setcampaign(p);
      console.log(campaign);
    }
  }, [campaignData]);

  const createLink = (id) => {
    return `/campaign-details/${id}`;
  };

  const arrowStyle = {
    color: "#1a73e8",
  };
  const handleLeftScroll = (e) => {
    document.querySelector(".campaign-container").scrollBy({
      top: 0,
      left: -700,
      behavior: "smooth",
    });
  };

  const handleRightScroll = (e) => {
    document.querySelector(".campaign-container").scrollBy({
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
        Oops! Something went wrong
      </div>
    )
  }

  if (!campaign) {
    return (
      <div className="isLoading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if(campaign.length === 0){
    return (
      <div className="nothing">
      <h1>No Campaigns Found</h1>
      </div>
    )
  }

  return (
    <div className="Campaigns">
      <h1 className="camp-title">Campaign</h1>

      <div className="left-scroll">
        <FontAwesomeIcon
          style={arrowStyle}
          icon={faArrowAltCircleLeft}
          size="3x"
          onClick={handleLeftScroll}
        />
      </div>

      <div className="campaign-container">
        {campaign.reverse().map((data) => (
            <div className="camp-container" key={data._id}>
                <div className="camp-img">
                  <img className="img" src={data.imageUrl} alt="" />
                </div>
                <div className="camp-details-container">
              <Link
                to={createLink(data._id)}
              >
                  <div className="camp-heading">
                    <h1 className="title">{data.title.slice(0, 20)}...</h1>
                    <p dangerouslySetInnerHTML={ {__html: data.content.slice(0, 30)} } />
                  </div>
              </Link>
                  <div className="organiser-details">
                      <img
                        src={data.fundRaiser.imageUrl}
                        alt=""
                      />
                    <Link to={`/patron/${data.fundRaiser.nerchapettiId}`}>
                      <p>{data.fundRaiser.name}</p>
                    </Link>
                    <Likes id={data._id} likes={data.likes} likeFor="campaign" />
                  </div>

                  <div className="fund-details">
                    <h2>
                      <span>Rs {data.moneyCollected} </span> raised out of Rs{" "}
                      {data.totalAmount}
                    </h2>
                    <progress
                      value={data.moneyCollected}
                      max={data.totalAmount}
                    ></progress>

                  </div>
                  <div className="extra-details">
                    <div className="time-left">
                      <p>
                        {" "}
                        <FontAwesomeIcon
                          style={{ color: "grey" }}
                          icon={faClock}
                        />{" "}
                        91 Days Left
                      </p>
                    </div>

                    <div className="supporters">
                      <p>
                        <FontAwesomeIcon
                          style={{ color: "red" }}
                          icon={faHeart}
                        />{" "}
                        {data.supporters} Supporters
                      </p>
                    </div>
                  </div>
                </div>
              <div className="share">
                <WhatsappShareButton url={`https://nerchapetti.com/campaign-details/${data._id}`}>
                  <FontAwesomeIcon className="shareicon" icon={faWhatsapp} />{" "}
                </WhatsappShareButton>
                <FacebookShareButton url={`https://nerchapetti.com/campaign-details/${data._id}`}>
                  <FontAwesomeIcon className="shareicon" icon={faFacebook} />{" "}
                </FacebookShareButton>
                <TwitterShareButton url={`https://nerchapetti.com/campaign-details/${data._id}`}>
                  <FontAwesomeIcon className="shareicon" icon={faTwitter} />{" "}
                </TwitterShareButton>
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

export default Campaigns;
