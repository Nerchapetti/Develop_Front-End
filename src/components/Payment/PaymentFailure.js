import { BiErrorCircle } from 'react-icons/bi';
import "./failed.scss";

const PaymentFailure = () => {
  return (
    <div className="failed">
      <div className="container">
        <BiErrorCircle className="icon" />
        <h1>Payment Failed</h1>
        <p>
          <ol>
            <li>Something went wrong, Try again</li>
            <li></li>
          </ol>
        </p>
        <a href="/">
          <button>Go back</button>
        </a>
      </div>
    </div>
  );
};

export default PaymentFailure;
