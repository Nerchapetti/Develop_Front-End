import { faMailBulk, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./patronDetails.css"

const PatronDetails = ({patron}) => {


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
        src={patron.imageUrl}
        alt="patron"
      />
      <div class="section">
        <h1>{patron.about.name}</h1>
        <p dangerouslySetInnerHTML={ {__html: patron.about.about} }></p>
        <p><FontAwesomeIcon icon={faPhoneAlt} /> {patron.contact.phoneNumber[0]} </p>
        <p><FontAwesomeIcon icon={faMailBulk}/> {patron.contact.email} </p>
        
      </div>
    </div>
  );
};

export default PatronDetails;
