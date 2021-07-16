import { useParams } from "react-router";
import getRequest from "../../API/getRequest";
import { useEffect, useState } from "react";
import Header from "../NavBar/Header";
import Footer from "../Footer/Footer";
import "./CampaignDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import Payment from "../Parishes/Payment";
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
import Likes from "../Likes/Likes"
import Popup from "../Popup/Popup";

const CampaignDetails = () => {
  const [campaignData, setcampaignData] = useState();
  const { id } = useParams();
  const [error, seterror] = useState("");
  const [isPopupOpen, setisPopupOpen] = useState(false)


  const closePopup = () => {
    setisPopupOpen(false)
    console.log(isPopupOpen);
  }

  const openPopup = () => {
    setisPopupOpen(true)
    console.log(isPopupOpen)
  }

  useEffect(() => {
    getRequest(`${window.URI}/get-campaign-id/${id}`)
      .then((res) => {
        if(res.status === "ok"){
          console.log(res);
          setcampaignData(res.data);
        }
        else{
          seterror("some internal error")
          console.log(res);
        }
      })
      .catch((err) => {
        seterror(err)
        console.log(err);
      });
  }, []);

  if (error) {
    return <div className="error">Oops!! something went wrong</div>;
  }

  if (!campaignData) {
    return (
      <>
        <Header />
        <div className="isLoading">
          <h1>Loading...</h1>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <div>
      <Header />
      <div className="campaign-details-container">
        {isPopupOpen && <Popup plan={campaignData.plan} id={campaignData.nerchapettiId} closePopup={closePopup} />}
        <h1 className="title">{campaignData.title}</h1>
        <div className="camp-details-inner-container">
          <div style={{position: "relative"}} className="left-camp-container">
            <img className="img" src={campaignData.imageUrl} alt="" />
            <Likes id={campaignData._id} likes={campaignData.likes} likeFor="campaign"/>
            <div className="share">
              <WhatsappShareButton url={`https://nerchapetti.com/campaign/${campaignData.nerchapettiId}`}>
                <FontAwesomeIcon className="shareicon" icon={faWhatsapp} />{" "}
              </WhatsappShareButton>
              <FacebookShareButton url={`https://nerchapetti.com/campaign/${campaignData.nerchapettiId}`}>
                <FontAwesomeIcon className="shareicon" icon={faFacebook} />{" "}
              </FacebookShareButton>
              <TwitterShareButton url={`https://nerchapetti.com/campaign/${campaignData.nerchapettiId}`}>
                <FontAwesomeIcon className="shareicon" icon={faTwitter} />{" "}
              </TwitterShareButton>
            </div>

            <div className="about" dangerouslySetInnerHTML={ {__html: campaignData.content} } />
             
            
          </div>

          <div className="right-camp-container">
            <button className="contribute" onClick={openPopup}>
              <FontAwesomeIcon icon={faHeart} size="1x" /> Contribute Now
            </button>

            <div className="amount-details">
              <p>
                <span className="money-collected">
                  ₹{campaignData.moneyCollected}
                </span>{" "}
                <br />
                raised out of{" "}
                <span className="total-amount">
                  ₹{campaignData.totalAmount}
                </span>
              </p>

              <progress
                value={campaignData.moneyCollected}
                max={campaignData.totalAmount}
              ></progress>

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
                    <FontAwesomeIcon style={{ color: "red" }} icon={faHeart} />{" "}
                    {campaignData.supporters} Supporters
                  </p>
                </div>
              </div>

              <div className="payment">
                {/* <Payment /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampaignDetails;
