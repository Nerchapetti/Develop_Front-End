import "./success.css";
import { FaCheck } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

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
            &emsp; Your payment to st joseph is successfull . check your mail
            for your receipt .
          </p>

          {/* const PaymentSuccess = () => {
    return (
        <div>
            <h1>Thank you, </h1>
            <h2>Your payment is successfull</h2>
            */}
        </div>
        <div className="reciept">
          <a href="#">
            <button>Reciept</button>
          </a>
          <a href="/">
            <button> Done </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
