import React, { useState } from "react";
import "./QurbanaPanam.css";
import postRequest from "../../API/postRequest";
import Popup from "../Popup/Popup";

const QurbanaPanam = ({ parish }) => {
    const [Price, setPrice] = useState(0);
    const [success, setsuccess] = useState(false);
    const [error, seterror] = useState(false);
    const [totalList, settotalList] = useState([])
    const [isPopupOpen, setisPopupOpen] = useState(false);

    const closePopup = () => {
        setisPopupOpen(false);
        console.log(isPopupOpen);
    };

    const openPopup = () => {
        setisPopupOpen(true);
        console.log(isPopupOpen);
    };

    const add = (e) => {
        console.log(e.target.previousElementSibling.getAttribute('data-type'));
        let qurbanaName = e.target.previousElementSibling.getAttribute('data-type')
        let amount = e.target.previousElementSibling.getAttribute('data-amount')
        let username = e.target.previousElementSibling.value
        setPrice(Price + parseFloat(amount))
        settotalList([...totalList, {name: qurbanaName, username: username }])
        e.target.previousElementSibling.value = ""
    };

   


    return (
        <div className="qurbana-panam">
            {isPopupOpen && <Popup _amount={Price} totalListOfferings={totalList} category="offerings" plan={parish.plan} id={parish.nerchapettiId} closePopup={closePopup} />}
            {error? <div className="qurbana-error"> Something went wrong, Please try again later </div> : ""}
            {success? <div className="qurbana-success"> List Sent Successfully </div> : ""}
            {totalList.length > 0 ? (
                <div className="feedback">
                    <h1>
                        Total Amount: <span>{Price} Rs</span>{" "}
                    </h1>
                    <ul>
                        {totalList.map(item => (
                            <li>{item.name} - {item.username}</li>
                        ))}
                       
                    </ul>

                    <button className="btn" onClick={openPopup}>
                        Pay
                    </button>
                </div>
            ) : (
                ""
            )}

            {parish.qurbana.map(qur => (
                <div className="qurbana-item">
                <h1 className="qurbana-title">{qur.name}</h1>
                <p>Rs. {qur.amount}</p>
                <div className="input">
                    <input
                        data-type={qur.name}
                        data-amount={qur.amount}
                        className="name-input"
                        type="text"
                        placeholder="Name"
                        name="blessings-name"
                    />
                    <button onClick={(e) => add(e)} className="btn">
                        Add
                    </button>
                </div>
            </div>
            ))}
            
        </div>
    );
};

export default QurbanaPanam;
