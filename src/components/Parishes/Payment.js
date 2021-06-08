import "./Payment.css"

const Payment = () => {
    return (
        <div className="bank_details">
            <ul className="list">
                <li className="head"> Bank Account Details</li>
                <li>Bank Name:<br/><span>NAME</span> </li> 
                <li>Branch Name:<br/><span>NAME</span> </li>
                <li>Account Holder:<br/> <span>Name</span></li> 
                <li>IFSC: <br/><span>2216546646545465</span></li>
                <li>A/C NO : <br/><span>45456468465465</span></li>
                <div className="button">      
                    <button>Pay</button>
                </div>
            </ul>  
        </div>
    )
}

export default Payment;