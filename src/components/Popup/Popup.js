import { useState } from "react";
import "./Popup.css";
import postRequest from "../../API/postRequest"

const Popup = ({ closePopup, id, plan }) => {
    const [amount, setamount] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    

    const submitForm = (e) => {
        e.preventDefault();

        const data = {
            orderAmount: amount,
            customerEmail: email,
            customerName: name,
            customerPhone: phoneNumber,
            nerchapettiId: id,
            plan: plan
        }

        postRequest(`${window.URI}/create-payment`, data).then(res => {
            console.log(res);
            window.location = res.link
        })
    };

    return (
        <div className="popup-container">
            <div className="popup-content">
                <div className="close-popup" onClick={closePopup}>x</div>
                <form className="payment-form" onSubmit={(e) => submitForm(e)}>

                    <div className="input-field">
                        <input
                            type="number"
                            className="inputbox"
                            value={amount}
                            onChange={e => setamount(e.target.value)}
                            required
                        />
                        <label>
                            Amount <span>*</span>
                        </label>
                    </div>

                    <div className="input-field">
                        <input
                            type="number"
                            className="inputbox"
                            value={phoneNumber}
                            onChange={e => setphoneNumber(e.target.value)}
                            required
                        />
                        <label>
                            Phone No <span>*</span>
                        </label>
                    </div>
                    <div className="input-field">
                        <input
                            type="text"
                            className="inputbox"
                            value={name}
                            onChange={e => setname(e.target.value)}
                            required
                        />
                        <label>
                            Name <span>*</span>
                        </label>
                    </div>

                    <div className="input-field">
                        <input
                            className="inputbox"
                            type="email"
                            value={email}
                            onChange={e => setemail(e.target.value)}
                            required
                        />
                        <label>
                            Email <span>*</span>
                        </label>
                    </div>

                  
                    <div className="input-field">
                        <input type="submit" value={`Proceed to Pay Rs. ${amount}`} />
                    </div>
                </form>

               
            </div>
        </div>
    );
};

export default Popup;
