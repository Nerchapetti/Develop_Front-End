import { faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getPatron from "../../API/getPatron";
import "./patronDetails.css"

const PatronDetails = ({patron}) => {
  // const { id } = useParams();
  // const [patronDetails, setpatronDetails] = useState();

  // useEffect(() => {
  //   getPatron(id)
  //     .then((res) => {
  //       setpatronDetails(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  if (!patron) {
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
        <h1>{patron.about.name}</h1>
        <p>{patron.about.about} </p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> {patron.contact.phoneNumber[0]} </p>
        <p><FontAwesomeIcon icon={faMailBulk}/> {patron.contact.email} </p>
        
      </div>
    </div>
  );
};

export default PatronDetails;
