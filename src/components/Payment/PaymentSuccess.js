import "./success.scss";
import { FaCheck } from "react-icons/fa";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (

      <div className="success">
        <div class="page-wrapper">
          <div class="circle-wrapper">
            <div class="success circle"></div>
            <div class="icon">
              <i>
                {" "}
                <FaCheck />
              </i>
            </div>
          </div>
          <br />
        </div>
        <div className="payment-details">
          <p>Payment Successfull</p>
          <p>Rs : 7000</p>
          <div className="table1">
            <table>
              <tr>
                <th colSpan="3">Transaction details</th>
              </tr>
              <tr>
                <td>
                  <b> Transaction ID</b>
                </td>
                <td>: &emsp;</td>
                <td>Transaction Data</td>
              </tr>
              <tr>
                <td>
                  <b> Patron Name: </b>
                </td>
                <td>:</td>
                <td>St. Pauls CSI Church</td>
              </tr>
              <tr>
                <td>
                  <b> Nerchapetti ID </b>
                </td>
                <td>:</td>
                <td>6950030003</td>
              </tr>
              <tr>
                <td>
                  <b> Transaction Initiated On </b>
                </td>
                <td>:</td>
                <td>time and date</td>
              </tr>
              <tr>
                <td>
                  <b>Transaction Status </b>
                </td>
                <td>:</td>
                <td>Initiated</td>
              </tr>
            </table>
            <div className="button">
                <Link to="/">
              <button>
                done
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default PaymentSuccess;

// <div className="success">
//     //   <a href="/" className="goback">
//     //     {" "}
//     //     <IoArrowBackOutline />{" "}
//     //   </a>
//     //   <div className="S-container">
//     //     <h1 className="tick">
//     //       <span>
//     //         <FaCheck />
//     //       </span>
//     //     </h1>
//     //     {/* <h1>Thank you {name}, </h1> */}
//     //     <div className="content">
//     //       <h2> Payment successfull</h2>
//     //       <p>
//     //         &emsp; Your payment is successfull. check your mail
//     //         for your receipt.
//     //       </p>

//     //     </div>
//     //     <div className="reciept">
//     //       <a href="#">
//     //         <button>Reciept</button>
//     //       </a>
//     //       <Link to="/">
//     //         <button> Done </button>
//     //       </Link>
//     //     </div>
//     //   </div>
//     // </div>
