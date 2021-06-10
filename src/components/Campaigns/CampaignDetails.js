import { useParams } from "react-router";
import getRequest from "../../API/getRequest";
import { useEffect, useState } from "react";
import { createImgURL } from "../../API/utilities";
import Header from "../NavBar/Header";
import Footer from "../Footer/Footer";
import "./CampaignDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleRight,
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
const CampaignDetails = () => {
  const [campaignData, setcampaignData] = useState();
  const { id } = useParams();
  useEffect(() => {
    getRequest(`http://localhost:5000/api/get-campaign/${id}`)
      .then((res) => {
        console.log(res);
        setcampaignData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

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
        <h1 className="title">{campaignData.title}</h1>
        <div className="camp-details-inner-container">
          <div className="left-camp-container">
            <img className="img" src={createImgURL(campaignData)} alt="" />
            <div className="share">
                <WhatsappShareButton url="http://nerchapetti.com">
                  <FontAwesomeIcon className="shareicon" icon={faWhatsapp} />{" "}
                </WhatsappShareButton>
                <FacebookShareButton url="http://nerchapetti.com">
                  <FontAwesomeIcon className="shareicon" icon={faFacebook} />{" "}
                </FacebookShareButton>
                <TwitterShareButton url="http://nerchapetti.com">
                  <FontAwesomeIcon className="shareicon" icon={faTwitter} />{" "}
                </TwitterShareButton>
              </div>
            
            <div className="about">
              <p>
                My friend Rohit Sharma is suffering from brain haemorrhage and
                without urgent treatment, he will not survive.
                <br /> <br />
                Rohit is a doting husband and a loving father to a 2-year-old
                baby girl. 5 years ago, his father met with a horrible accident
                which left him paralysed and also caused memory loss. While
                their family was still processing the devastation, Rohit had
                suffered from a stroke.
                <br /> <br />
                On 24 February 2020, Rohit suddenly collapsed and was rushed to
                the hospital. The doctor told his wife that he suffered from
                brain haemorrhage because of which he will have to be admitted
                to the hospital. He also told her that Rohit’s condition was
                critical and that he will have to stay in the hospital for a
                long time for treatment & recovery.
              </p>
            </div>
          </div>

          <div className="right-camp-container">
            <button className="contribute">
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
                    5 Supporters
                  </p>
                </div>
              </div>

              <div className="payment">
                <Payment />
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
