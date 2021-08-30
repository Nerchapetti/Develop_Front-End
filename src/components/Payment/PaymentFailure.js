import {  AiOutlineClose } from "react-icons/ai";
import "./failed.scss"; 

const PaymentFailure = () => {
    return (
        <div className="failed">
            <div className="container">
            <AiOutlineClose className="icon"/>
            <h1>Payment failed</h1>
            <p>Something went wrong, Try again 
            </p>
            <a href="/">
                <button>
                    Go back
                </button>
            </a>
            </div>
        </div>
    )
}

export default PaymentFailure
