import './Parishes_page.css'

const Parishes_detail = () => {
    return ( 
        <div className="main-container">
            <div className="church_detail">
                <h1>About the Church</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="details">
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
            </div>
        </div>
     );
}
 
export default Parishes_detail;