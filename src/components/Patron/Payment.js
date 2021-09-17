import { useState } from "react";
import Popup from "../Popup/Popup";

const Payment = ({ patron }) => {
    const [isPopupOpen, setisPopupOpen] = useState(false);

    const { bankAccount: bank, contact, nerchapettiId } = patron

    const closePopup = () => {
        setisPopupOpen(false);
        console.log(isPopupOpen);
    };

    const openPopup = () => {
        setisPopupOpen(true);
        console.log(isPopupOpen);
    };
    return (
        <div style={{margin: '50px'}}>
        <div className="bank_details">
            {isPopupOpen && (
                <Popup
                    vendorEmail={contact.email}
                    category="patron"
                    plan="basic"
                    id={nerchapettiId}
                    closePopup={closePopup}
                />
            )}
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
                    <button onClick={openPopup}>Quick Pay</button>
                </div>
            </ul>
        </div>
        </div>
    );
};

export default Payment;
