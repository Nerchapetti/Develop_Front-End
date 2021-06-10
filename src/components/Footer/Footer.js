import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="container">
                <div className="list-container">
                    <div className="title">
                        <h1 className="companyname">Nerchapetti</h1>
                        <p>About nerchapetti </p>
                    </div>
                        <div className="details">
                            <ul className="list-footer">
                                <li className="">About</li>
                                <li className="">Contact</li>
                                <li className="">Enroll</li>
                                <li className=""><Link to="/patrons" class="link">Patron</Link></li>
                                <li className="">Pricing</li>
                            </ul>
                        </div>
                        <div className="teamsandpolicy">
                            <ul className="policy">
                                <li className="">Privacy Policy</li>
                                <li className="">Teams of Use</li>
                                <li className="">Refund Policy</li>
                                <li className="">AML Policy</li>
                            </ul>
                        </div>
                        <div className="socialmedia">
                            <h3 className="letschat">Let's chat! </h3>
                            <ul className="icons-footer">
                                 <li className=""><FontAwesomeIcon icon={faFacebookF} /></li>
                                 <li className=""><FontAwesomeIcon icon={faInstagram}/></li> 
                                <li className=""><FontAwesomeIcon icon={faYoutube}/></li>
                                <li className=""><FontAwesomeIcon icon={faTwitter}/></li> 
                            </ul>
                        </div>
                 </div>
                 <div className="licence">
                    <p>© 2021, Copyright John Zakariah Technologies. All Rights Reserved</p>
                </div>
            </div>
        </div>
     );
} 
export default Footer;
