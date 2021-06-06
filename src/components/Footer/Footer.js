import './footer.css'

const Footer = () => {
    return ( 
        <div className="footer-containor">
            <div classname="containor">
                <div className="title">
                    <h1 classname="companyname">nerchapetti</h1>
                </div>
                <div class="list-container">
                    <div className="details">
                        <ul className="list">
                            <li className="">about</li>
                            <li className="">contact</li>
                            <li className="">Enroll</li>
                            <li className="">Patron</li>
                            <li className="">Pricing</li>
                        </ul>
                    </div>
                    <div className="teamsandpolicy">
                        <ul classname="policy">
                            <h3 classname="head">Privacy Policy</h3>
                            <li className="">Teams of Use</li>
                            <li className="">Refund Policy</li>
                            <li className="">AML Policy</li>
                        </ul>
                    </div>
                    <div className="socialmedia">
                        <ul className="icons">
                            <li className="">facebook</li>
                            <li className="">instagram</li>
                            <li className="">twitter</li>
                            <li className="">youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;
