import React, { useState } from "react";
import "./offer.css"


const Offerings = ({ parish }) => {

    const [Price, setprice] = useState(0)
    const [error, seterror] = useState(false)
    const [success, setsuccess] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const [totalList, settotalList] = useState([])

    const add = (e) => {
        console.log(e.target.previousElementSibling.getAttribute('data-type'));
        let offerName = e.target.previousElementSibling.getAttribute('data-type')
        let amount = e.target.previousElementSibling.value
        setprice(Price + parseFloat(amount))
        settotalList([...totalList, {offerName: offerName, amount: amount }])
        e.target.previousElementSibling.value = ""
    };
    return (
        <div className="offer-container">
            {error ? (
                <div className="offer-error">
                    {" "}
                    Something went wrong, Please try again later{" "}
                </div>
            ) : (
                ""
            )}
            {success ? (
                <div className="offer-success"> List Sent Successfully </div>
            ) : (
                ""
            )}
            {totalList.length > 0 ? (
                <div className="feedback">
                    <h1>
                        Total Amount: <span>{Price} Rs</span>{" "}
                    </h1>
                    <ul>
                        {totalList.map(item => (
                            <li>{item.offerName} - {item.amount}</li>
                        ))}
                       
                    </ul>

                    <button className="btn">
                        Pay
                    </button>
                </div>
            ) : (
                ""
            )}

            {parish.offerings.map((offer, i) => (
                <div className="offer-item">
                    <h2 className="name">{offer.Name}</h2>
                    <div className="input">
                        <input
                            data-type={offer.Name}
                            className="name-input"
                            type="number"
                            placeholder="Amount"
                            name={offer.Name}
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

export default Offerings;
