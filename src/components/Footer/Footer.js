import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return ( 
        <div className="footer-container">
            <div classname="container">
                <div class="list-container">
                    <div className="title">
                        <h1 classname="companyname">Nerchapetti</h1>
                        <p>About nerchapetti i ii ii i i iii i ii ii i i </p>
                    </div>
                        <div className="details">
                            <ul className="list">
                                <li className="">About</li>
                                <li className="">Contact</li>
                                <li className="">Enroll</li>
                                <li className="">Patron</li>
                                <li className="">Pricing</li>
                            </ul>
                        </div>
                        <div className="teamsandpolicy">
                            <ul classname="policy">
                                <l1 classname="">&ensp; Privacy Policy</l1>
                                <li className="">Teams of Use</li>
                                <li className="">Refund Policy</li>
                                <li className="">AML Policy</li>
                            </ul>
                        </div>
                        <div className="socialmedia">
                            <ul className="icons">
                                <h3 className="letschat">Let's chat! </h3>
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
