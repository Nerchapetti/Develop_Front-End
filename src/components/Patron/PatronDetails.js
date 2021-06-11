import { faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getPatron from "../../API/getPatron";
import "./patronDetails.css"

const PatronDetails = () => {
  const { id } = useParams();
  const [patronDetails, setpatronDetails] = useState();

  useEffect(() => {
    getPatron(id)
      .then((res) => {
        setpatronDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!patronDetails) {
    return (
      <>
        <div className="isLoading"></div>
      </>
    );
  }

  return (
    <div className="patron-details">
      <img
        src="http://www.nerchapetti.com/patron/images/priest.png"
        alt="patron"
      />
      <div class="section">
        <h1>{patronDetails.Name}</h1>
        <p>Some beautiful bio of our great patron fdsf fdsf fdsf </p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> 9747406685 </p>
        <p><FontAwesomeIcon icon={faMailBulk}/> rahul@gmail.com </p>
        
      </div>
    </div>
  );
};

export default PatronDetails;
