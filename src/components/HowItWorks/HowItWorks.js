import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./howitworks.css";

const HowItWorks = () => {
  return (
    <div className="HowItWorks">
      <Header />
      <div className="HIW-container">
        <h1>How it works</h1>
        <hr />
        <div className="content-data">
          <div>
            <h2>
              What is payment gateway charges?
              <hr />
            </h2>

            <div className="paragraph">
              <p>
                Whenever you send money as an offering to a parish or make an
                online payment for a campaign, it needs to be securely processed
                and verified by a third-party payment processor. We have
                partnered with Cashfree (www.cashfree.com); which is a payments
                and banking technology company that enables businesses in India
                to collect payments online and make payouts, working with these
                payment processors.
              </p>
              <p>
                These processors include Banks (for Net-banking, IMPS, NEFT,
                RTGS transactions), Visa, Mastercard, AMEX, Rupay, etc (for
                credit and debit card transactions), Paytm, UPI apps, and other
                payment wallets who charge a small fee for this service
                (‘payment gateway charges’). These charges are unavoidable.
              </p>
              <p>
                This is NOT a service charge to Nerchapetti.com or John Zakariah
                Technologies. These fees go directly to the payment processor
                and help us keep nerchapetti.com a safe place to donate.
              </p>
            </div>
          </div>
          <div>
            <h2 className="head2">
              {" "}
              Why is Nerchapetti.com not charging any fees for itself? <hr />
            </h2>
            <div className="paragraph">
              <p>
                Actually, we do. We have two plans :-
                <br /> &emsp; The BASIC plan and the PREMIUM plan. While we do
                not collect any service fees for the BASIC plan, we do collect a
                10% service fee on the total amount raised through this
                platform, for the PREMIUM plan.
              </p>
              <p>
                For the PREMIUM plan, we estimate the amount that can be raised
                via this platform, and budget a part of the service fee expected
                to be collected in the future, to be utilized for social media
                advertising and for other digital marketing efforts.
              </p>
              <p>
                For the BASIC plan, however, there are no service fees (other
                than the bank charges collected by the payment gateway
                provider), and we believe it will encourage more people to
                support various needs and causes, without absolute peace of
                mind.
              </p>
            </div>
          </div>
          <div>
            <h2>Our Purpose</h2>
            <div className="full-paragraph">
              <p>
                <ul>
                  <li>
                    Supporting Christian parishes and institutions in accepting
                    offerings and other related payments, digitally.
                  </li>
                  <li>
                    Supporting the fund-raising initiatives using the power of
                    digital marketing.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div>
            <h2>Our Mission:</h2>
            <div className="full-paragraph">
              <p>
                Be an instrument to God's Will, by ensuring that the necessary
                resources are made available to the right people at the right
                time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
