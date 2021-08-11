import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import './howitworks.css'

const HowItWorks = () => {
  return (
    <div className="HowItWorks">
      <Header />
      <div className="HIW-container">
        <h1>How it works</h1>
        <hr />
        <div className="content-data">
          <div>
            <h2>What is payment gateway charges?</h2>
            <p>
              Whenever you send money as an offering to a parish or make an
              online payment for a campaign, it needs to be securely processed
              and verified by a third-party payment processor. We have partnered
              with Cashfree (www.cashfree.com); which is a payments and banking
              technology company that enables businesses in India to collect
              payments online and make payouts, working with these payment
              processors.
            </p>
            <p>
              {" "}
              These processors include Banks (for Net-banking, IMPS, NEFT, RTGS
              transactions), Visa, Mastercard, AMEX, Rupay, etc (for credit and
              debit card transactions), Paytm, UPI apps, and other payment
              wallets who charge a small fee for this service (‘payment gateway
              charges’). These charges are unavoidable.
            </p>
            <p>
              This is NOT a service charge to Nerchapetti.com or John Zakariah
              Technologies. These fees go directly to the payment processor and
              help us keep nerchapetti.com a safe place to donate.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
