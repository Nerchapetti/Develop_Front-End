import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container">
                <div className="list-container">
                    <div className="title">
                        <Link to="/">
                            <h1 className="companyname">Nerchapetti</h1>
                        </Link>
                        <div className="address">
                            <a href="tel:+919747121112"><p><FontAwesomeIcon icon={faPhoneAlt} /> 9747121112 </p></a>
                            <a href="mailto:nerchapetti@gmail.com"><p>nerchapetti@gmail.com </p></a>


                            <p>
                                John Zakariah Technologies, <br />
                                Veera Marthanda Varma Road, <br />
                                Podiyadi P. O. <br />
                                Thiruvalla, Kerala <br /> 
                                689 110 (India)  <br /> <br />
                                Email:
                                nerchapetti@gmail.com  <br /> 
                                Time: Mon - Fri (9:00 -
                                16:00)
                            </p>
                        </div>
                    </div>
                    <div className="details">
                        <ul className="list-footer">
                            <li className="">
                                <Link to="/about">About</Link>
                            </li>
                            <li className="">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="">How it works</li>
                            <li className="">
                                <Link to="/patrons">Patron</Link>
                            </li>
                            <li className="">Pricing</li>
                        </ul>
                    </div>
                    <div className="teamsandpolicy">
                        <ul className="policy">
                            <li className="">
                                <Link to="/policies/privacy-policy">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/policies/terms-of-use">
                                    Terms of Use
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/policies/refund-policy">
                                    Refund Policy
                                </Link>
                            </li>
                            <li className="">
                                <Link to="/policies/aml-policy">
                                    AML Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="socialmedia">
                        <ul className="icons-footer">
                            <li className="" style={{ color: "#1a73e8" }}>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://facebook.com"
                                >
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li className="" style={{ color: "#b0487b" }}>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://instagram.com"
                                >
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li className="" style={{ color: "#4ea6e8" }}>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://twitter.com"
                                >
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li className="" style={{ color: "#2874b0" }}>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://linkedin.com"
                                >
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="licence">
                    <p>
                        © 2021, Copyright{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://johnzakariah.com/"
                        >
                            {" "}
                            John Zakariah Technologies
                        </a>{" "}
                        All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Footer;
