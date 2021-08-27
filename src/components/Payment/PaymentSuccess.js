import "./success.css";
import { FaCheck } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="success">
      <a href="/" className="goback">
        {" "}
        <IoArrowBackOutline />{" "}
      </a>
      <div className="S-container">
        <h1 className="tick">
          <span>
            <FaCheck />
          </span>
        </h1>
        {/* <h1>Thank you {name}, </h1> */}
        <div className="content">
          <h2> Payment successfull</h2>
          <p>
            &emsp; Your payment is successfull. check your mail
            for your receipt.
          </p>

          
        </div>
        <div className="reciept">
          <a href="#">
            <button>Reciept</button>
          </a>
          <Link to="/">
            <button> Done </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
