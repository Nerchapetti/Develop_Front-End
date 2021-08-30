import { useState, useEffect } from "react";
import "./Popup.scss";
import postRequest from "../../API/postRequest"

const Popup = ({ closePopup, id, plan, category, vendorEmail, totalListQurbana, totalListOfferings, _amount }) => {
    const [amount, setamount] = useState("");
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");

    useEffect(() => {
        if(_amount > 0){
            setamount(_amount)
        }
    }, [])

    const submitForm = (e) => {
        e.preventDefault();
        let data = {}
        if(category === "offerings"){
            data = {
                orderAmount: amount,
                customerEmail: email,
                customerName: name,
                customerPhone: phoneNumber,
                nerchapettiId: id,
                plan: plan,
                category: category,
                vendorEmail: vendorEmail,
                totalListOfferings: totalListOfferings
            }
        } else if(category === "qurbana") {
            data = {
                orderAmount: amount,
                customerEmail: email,
                customerName: name,
                customerPhone: phoneNumber,
                nerchapettiId: id,
                plan: plan,
                category: category,
                vendorEmail: vendorEmail,
                totalListQurbana: totalListQurbana
            }
        } else {
            data = {
                orderAmount: amount,
                customerEmail: email,
                customerName: name,
                customerPhone: phoneNumber,
                nerchapettiId: id,
                plan: plan,
                category: category,
                vendorEmail: vendorEmail,
            }
        }


        postRequest(`${process.env.REACT_APP_API_URI}/create-payment`, data).then(res => {
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
