import React, { useState } from "react";
import "./QurbanaPanam.css";


const QurbanaPanam = () => {
  const [FinalList, setFinalList] = useState("");
  const [BNames, setBNames] = useState([]);
  const [SNames, setSNames] = useState([]);
  const [DNames, setDNames] = useState([]);
  const [Price, setPrice] = useState(0);

  const add = (e) => {
    console.log(e.target.previousElementSibling);
    if (
      e.target.previousElementSibling.getAttribute("data-type") === "blessings"
    ) {
      console.log("blessings");
      setBNames([...BNames, e.target.previousElementSibling.value]);
      setPrice(Price + 5);
    } else if (
      e.target.previousElementSibling.getAttribute("data-type") === "sick"
    ) {
      console.log("sick");
      setPrice(Price + 5);
      setSNames([...SNames, e.target.previousElementSibling.value]);
    } else if (
      e.target.previousElementSibling.getAttribute("data-type") === "departed"
    ) {
      console.log("departed");
      setDNames([...DNames, e.target.previousElementSibling.value]);
      setPrice(Price + 5);
    }
  };

  console.log(BNames);

  return (
    <div className="qurbana-panam">
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

          <button className="btn">Send To Parish</button>
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
