import React, { useState } from "react";
import "./QurbanaPanam.css";
import postRequest from "../../API/postRequest";

const QurbanaPanam = ({ parish }) => {
    const [BNames, setBNames] = useState([]);
    const [SNames, setSNames] = useState([]);
    const [DNames, setDNames] = useState([]);
    const [Price, setPrice] = useState(0);
    const [success, setsuccess] = useState(false);
    const [error, seterror] = useState(false);



    const add = (e) => {
        console.log(e.target.previousElementSibling);
        if (
            e.target.previousElementSibling.getAttribute("data-type") === "blessings"
        ) {
            console.log("blessings");
            setBNames([...BNames, e.target.previousElementSibling.value]);
            setPrice(Price + 5);
            e.target.previousElementSibling.value = ""
        } else if (
            e.target.previousElementSibling.getAttribute("data-type") === "sick"
        ) {
            console.log("sick");
            setSNames([...SNames, e.target.previousElementSibling.value]);
            setPrice(Price + 5);
            e.target.previousElementSibling.value = ""
        } else if (
            e.target.previousElementSibling.getAttribute("data-type") === "departed"
        ) {
            console.log("departed");
            setDNames([...DNames, e.target.previousElementSibling.value]);
            setPrice(Price + 5);
            e.target.previousElementSibling.value = ""
        }
    };

    const sendToParish = () => {
        postRequest(`${window.URI}/qurbana-panam`, {
            id: parish._id,
            list: { blessings: BNames, sick: SNames, departed: DNames },
        })
            .then((res) => {
                if (res.status === "ok") {
                    setsuccess(true);
                    setPrice(0)
                    setBNames([])
                    setDNames([])
                    setSNames([])
                    console.log(res);
                } else {
                    seterror(true);
                    console.log(res);
                    setPrice(0)
                }
            })
            .catch((err) => {
                seterror(true);
                console.log(err);
                setPrice(0)
            });
    };


    return (
        <div className="qurbana-panam">
            {error? <div className="qurbana-error"> Something went wrong, Please try again later </div> : ""}
            {success? <div className="qurbana-success"> List Sent Successfully </div> : ""}
            {Price ? (
                <div className="feedback">
                    <h1>
                        Total Price: <span>{Price} Rs</span>{" "}
                    </h1>
                    <ul>
                        {BNames.map((b, i) => (
                            <li key={i}>{b} - Blessings</li>
                        ))}
                        {SNames.map((b, i) => (
                            <li key={i}>{b} - Sick</li>
                        ))}
                        {DNames.map((b, i) => (
                            <li key={i}>{b} - Departed</li>
                        ))}
                    </ul>

                    <button onClick={sendToParish} className="btn">
                        Send To Parish
                    </button>
                </div>
            ) : (
                ""
            )}

            <div className="qurbana-item">
                <h1 className="qurbana-title">Blessings</h1>
                <p>Rs. 5</p>
                <div className="input">
                    <input
                        data-type="blessings"
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

            <div className="qurbana-item">
                <h1 className="qurbana-title">Sick</h1>
                <p>Rs. 5</p>
                <div className="input">
                    <input
                        data-type="sick"
                        className="name-input"
                        type="text"
                        placeholder="Name"
                        name="sick-name"
                    />
                    <button onClick={(e) => add(e)} className="btn">
                        Add
                    </button>
                </div>
            </div>

            <div className="qurbana-item">
                <h1 className="qurbana-title">Departed</h1>
                <p>Rs. 5</p>
                <div className="input">
                    <input
                        data-type="departed"
                        className="name-input"
                        type="text"
                        placeholder="Name"
                        name="departed-name"
                    />
                    <button onClick={(e) => add(e)} className="btn">
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QurbanaPanam;
