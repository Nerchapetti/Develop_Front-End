import "./footer.scss";
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
              <a href="tel:+919747121112">
                <p>
                  <FontAwesomeIcon icon={faPhoneAlt} /> 9747121112{" "}
                </p>
              </a>
              <a href="mailto:contact@nerchapetti.com">
                <p>contact@nerchapetti.com </p>
              </a>

              <p>
                John Zakariah Technologies XI/328, <br />
                Veera Marthanda Varma Road, <br />
                Podiyadi P. O. <br />
                Thiruvalla, Kerala <br />
                689 110 (India) <br /> <br />
                
              </p>
            </div>
          </div>
          <div className="details">
            <ul className="list-footer">
              <li className="">
                <Link to="/about/us">About</Link>
              </li>
              <li className="">
                <Link to="/contact/us">Contact</Link>
              </li>
              <li className="">
                <Link to="/page/How-it-works"> How it works </Link>
              </li>
              <li className="">
                <Link to="/patrons/all">Patron</Link>
              </li>
              <li className="">
                <Link to="/pricing/plan">Pricing</Link>
              </li>
            </ul>
          </div>
          <div className="teamsandpolicy">
            <ul className="policy">
              <li className="">
                <Link to="/policies/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="">
                <Link to="/policies/terms-of-use">Terms of Use</Link>
              </li>
              <li className="">
                <Link to="/policies/refund-policy">Refund Policy</Link>
              </li>
              <li className="">
                <Link to="/policies/aml-policy">AML Policy</Link>
              </li>
            </ul>
          </div>
          <div className="socialmedia">
            <ul className="icons-footer">
              <li className="" style={{ color: "#1a73e8" }}>
                <a target="_blank" rel="noreferrer" href="https://facebook.com">
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
                <a target="_blank" rel="noreferrer" href="https://twitter.com">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="" style={{ color: "#2874b0" }}>
                <a target="_blank" rel="noreferrer" href="https://linkedin.com">
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
