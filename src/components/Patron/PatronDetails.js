import { faMailBulk, faPhoneAlt, faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./patronDetails.scss";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from "react";

const PatronDetails = ({ patron }) => {

    const [copyText, setcopyText] = useState(patron.nerchapettiId)
    const [copied, setcopied] = useState(false)

    if (!patron) {
        return (
            <>
                <div className="isLoading"></div>
            </>
        );
    }

    return (
        <div className="patron-details">
            <img src={patron.imageUrl} alt="patron" />
            <div class="section">
                <h1>{patron.about.name}</h1>
                <p>
                    <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                    {patron.contact.phoneNumber[0]}{" "}
                </p>
                <p>
                    <FontAwesomeIcon icon={faMailBulk} /> {patron.contact.email}{" "}
                </p>

                <div className="nerchapettiId">
                    <p className="id">Nerchapetti ID : {patron.nerchapettiId}</p>
                    <CopyToClipboard text={copyText}
                        onCopy={() => setcopied(true)}>
                        <button className="copybtn"><FontAwesomeIcon color={'blue'} icon={faClipboard} /></button>
                    </CopyToClipboard>
                </div>

                {copied ? <span style={{color: 'green'}}>ID Copied.</span> : null}
            </div>

        </div>
    );
};

export default PatronDetails;
