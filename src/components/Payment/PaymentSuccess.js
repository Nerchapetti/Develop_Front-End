import { useParams } from "react-router-dom";
import "./success.css";
import { FaCheck } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";

const PaymentSuccess = () => {
  const { name } = useParams();
  return (
    <div className="success">
      <a href="/">
        {" "}
        <IoArrowBackOutline />{" "}
      </a>
      <div className="S-container">
        <h1 className="tick">
          <span><FaCheck /></span>
        </h1>
        {/* <h1>Thank you {name}, </h1> */}
        <div className="content">
          <h2> payment successfull</h2>
          <p>
            &emsp; Your payment to st joseph is successfull . check your mail for your receipt .
            
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
