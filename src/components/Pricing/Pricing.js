import { faCheckCircle, faCircle, faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./pricing.css";

const Pricing = () => {
  return (
    <>
      <Header />
      <div className="pricing-container">
        <div className="pricing">
          <div className="headline">
            <h1>Find the perfect plan that’s right for you.</h1>
            <p>
              All plans include fast and reliable customer support, as well as a
              secure and reliable payment solution which meets your
              requirements.
            </p>
          </div>
          <div className="plans">
            <div className="planA">
              <h3>BASIC</h3>
              <p>
                <h4>
                  {" "}
                  <span> 0% </span> Service charge
                </h4>
                <span>(Bank Charges and Taxes apply)</span>
              </p>
              <ul>
                <p>
                  This package is FREE and assures easy to use and secure
                  payments. The digital era urges Parishes and Patrons to go
                  digital, and we are providing an easy user interface. The
                  basic package includes the following:
                </p>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8" }} /><b> Free listing of Parishes and Campaigns.</b> 
                  <p>
                    We do not charge the users for creating a new listing on our
                    platform. However, only Patrons who have empaneled with us
                    can create a listing.
                  </p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8" }} /><b> Nerchapetti ID. </b> 
                  <p>
                    Free customized webpage with a Unique ID (Nerchapetti ID)
                    and a unique link. The link to this webpage can be shared
                    with those interested via WhatsApp or SMS.
                  </p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8" }} /><b> Payment Gateway Integration.</b> 
                  <p>
                    All popular payment solutions, such as UPI, Debit Card &
                    Credit Card payment supported through a Payment Gateway
                    integration.
                  </p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8" }} /><b> Direct Settlements.</b> 
                  <p>
                    The payments received from the payees are credited directly
                    to bank accounts provided.
                  </p>
                </li>
              </ul>
            </div>
            <div className="planA">
              <h3>PREMIUM</h3>
              <p>
                <h4>
                  {" "}
                  <span> 10% </span> Service Charge
                </h4>
                (Bank Charges and Taxes apply)
              </p>
              <ul>
                <p>
                  In addition to the features offered in the ‘Basic’ plan, this
                  plan helps to have a wider reach by enabling ‘Marketing
                  Technologies’. With the current era being digitally dependent,
                  this package is highly recommended, and assures the following:{" "}
                </p>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8" }} /><b> SEO Capability.</b> 
                  <p>
                    {" "}
                    Search Engine Optimization (SEO) is essential for succeeding
                    online. There are nearly 200 million active websites and it
                    is critical that your unique web page stands out.
                  </p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8" }} /><b> Home Page Promotion.</b>
                  <p>
                    {" "}
                    Being featured on the Home Page gives you the page
                    visibility and reach, that you desire for your cause, and
                    gives you edge over other campaigns in our site.
                  </p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8" }} /><b> Social Media Ads.</b> 
                  <p>
                    Facebook ads and Google ads would be placed for a target
                    amount which have been mutually agreed upon. This ensures
                    wider audience.
                  </p>
                </li>
                <li>
                <FontAwesomeIcon icon={faCheckCircle} style = {{ color : "#1a73e8"  }} /><b> Targeted Marketing.</b> 
                  <p>
                    This is an approach to raise awareness among a specific
                    (targeted) group of audience, through segmentation and
                    positioning of the ads placed online.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="plan-end">
            <h2>Let’s start a conversation. </h2>
            <p>
              Contact us at contact@nerchapetti.com or call us on +91 9747121112
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
