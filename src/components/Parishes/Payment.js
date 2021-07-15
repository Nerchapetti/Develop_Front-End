import { useState } from "react";
import Popup from "../Popup/Popup";
import "./Payment.css";

const Payment = ({ bank, nerchapettiId, plan }) => {
    const [isPopupOpen, setisPopupOpen] = useState(false);

    const closePopup = () => {
        setisPopupOpen(false);
        console.log(isPopupOpen);
    };

    const openPopup = () => {
        setisPopupOpen(true);
        console.log(isPopupOpen);
    };
    return (
        <div className="bank_details">
        {isPopupOpen && <Popup plan={plan} id={nerchapettiId} closePopup={closePopup} />}
            <ul className="list">
                <li className="head"> Bank Account Details</li>
                <li>
                    Bank Name:
                    <br />
                    <span>{bank.bankName}</span>{" "}
                </li>
                <li>
                    Branch Name:
                    <br />
                    <span>{bank.branchName}</span>{" "}
                </li>
                <li>
                    Account Holder:
                    <br /> <span>{bank.accountHolder}</span>
                </li>
                <li>
                    IFSC: <br />
                    <span>{bank.IFSC}</span>
                </li>
                <li>
                    A/C NO : <br />
                    <span>{bank.accountNo}</span>
                </li>
                <div className="button">
                    <button onClick={openPopup}>Apreciate</button>
                </div>
            </ul>
        </div>
    );
};

export default Payment;
