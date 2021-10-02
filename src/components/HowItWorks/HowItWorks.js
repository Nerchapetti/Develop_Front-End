import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./howitworks.scss";

const HowItWorks = () => {
  return (
    <div className="HowItWorks">
      <Header />
      <div className="HIW-container">
        <h1>How it works</h1>
        <hr />
        <div className="content-data">
          <div className="full-paragraph">
            <p className="word">
              “I cannot do all the good that the world needs, but the world
              needs all the good that I can do”
              <p className="writter"> -Jana Stanfield</p>
            </p>
            <p>
              We live in a very busy world. The clock is ticking so fast that we
              don’t even wish to spend a minute to look at our fellow beings.
              This world wasn’t built in a single day. The world we see today is
              a result of the combined effort of millions of people who lived in
              this soil. Yes, this place is built of their love.
            </p>
            <p>
              Nerchappetti.com has built this website to help you in your path
              to goodness. If you are willing to spend a few minutes of your
              precious life, it can save a person’s whole life. We are here to
              guide you throughout the process. You can find solutions to all
              your queries here.
            </p>
          </div>
          <div>
            <h2>What is payment gateway charges?</h2>

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
              Why is Nerchapetti.com not charging any fees for itself?
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
          <div>
            <h2>What about Security?</h2>
            <div className="full-paragraph">
              <p>
                Yes, this is secure. Your online payments are safe and secure
                with Nerchapetti.com
              </p>
            </div>
            <div className="paragraph">
              <p>
                We have considered the PCI-DSS (Payment Card Industry - Data
                Security Standards) requirements for merchants while designing
                and building nerchapetti.com. The PCI Standards Council (SSC) is
                responsible for the development of the standards for PCI
                compliance. Its purpose is to help secure and protect the entire
                payment card ecosystem. These standards apply for merchants,
                service providers processing credit/debit card payment
                transactions. Payment Card Industry (PCI) compliance was
                suggested by our payment gateway provider to help ensure the
                security of credit card transactions on the website.
              </p>
              <p>
                As part of this process, we ensure that the data is encrypted
                during transmission and while at rest, that the access to
                systems are process-driven, and monitored using audit logs, we
                restrict access to data on a need-to-know basis, unique ids are
                assigned to each person with computer access, in order to ensure
                accountability for their actions, etc are some of the controls
                that we ensure as part of the PCI-DSS compliance guidelines.
              </p>
              <p>
                We use Cashfree Payments India Ltd., as our Payment Gateway
                partner, which is a company registered in Bangalore. All our
                transactions are currently processed through Cashfree, and
                Cashfree is a full-stack payments solution. It helps Indian
                businesses accept and send money and is used by 50,000+
                businesses for vendor payouts, wage payouts, bulk refunds, etc.
                Cashfree offers the highest number of payment modes in India via
                a single integration -- including Pay Later, Paytm, Cardless
                EMI, and even recurring subscription payments.
              </p>
              <p>
                Cashfree is a PCI-DSS v3.2.1 certified company which means we
                adhere to the regulations of the PCI and maintain a secure
                environment for credit card transactions. has been PCI-DSS
                certified by SISA Information Security, as a 'Service Provider'.
                (Certificate Number: PCI/COC/CPIPL12021; Type of Certification:
                PCI DSS v3.2.1) [Provide a link to the certificate here -
                <a href="https://www.sisainfosec.com/certificate.php?number=69377469293285406315&type=pcidss]">
                  sisainfosec.com
                </a>
              </p>
              <p>
                Cashfree is also an ISO/IEC 27001:2013 certified payment company
                which means the company has implemented all the procedures and
                processes recommended by the Information Security Management
                System (ISMS) policy. Cashfree is compliant with all the
                requirements for establishing, implementing, maintaining, and
                continually improving an information security management system
                (ISMS) – the aim of which is to help companies make the
                information assets they hold much more secure.
              </p>
              <p>
                While we at Nerchapetti ensure your data is secure with us, here
                are some simple to-dos that are recommended to be followed you
                to ensure maximum security:
              </p>
            </div>
            <div>
              <div className="full-paragraph">
                <p>
                  <ul className="lists">
                    <li>
                      Do not share your personal bank details like card number,
                      CVV, PIN, and OTP via any mode of communication like
                      calls, texts, or emails
                    </li>
                    <li>
                      Cashfree will never ask you for any of the above-mentioned
                      information
                    </li>
                    <li>
                      Please make sure your accounts are secured with strong
                      passwords. Do not write them down that can be accessed by
                      anyone else
                    </li>
                  </ul>
                </p>
              </div>
            </div>
            <div>
              <h2>Product Overview</h2>
              <div className="full-paragraph">
                <p>
                  Nerchapetti.com is a website for addressing the needs for
                  those institutions and organisations which collect offerings
                  and donations. It is an online web-portal where multiple
                  organizations may receive offerings / donations, as well as
                  launch fund-raising campaigns, on a ‘single platform’.
                </p>
                <p>
                  Our aim is to provide an easy and seamless platform for making
                  offerings to religious organisations and fundraising of
                  charitable causes.
                </p>
                <div className="subpara">
                  <h2>Product Features</h2>
                  <p>
                    <span>
                      Direct Settlements :- <br />
                    </span>
                    The payments received from the users are credited directly
                    to bank accounts provided by the parish.
                  </p>
                  <p>
                    <span>
                      {" "}
                      No Upfront Payment :- <br />
                    </span>
                    Free Enrollment for parishes and campaigns, under both Basic
                    and Premium Plans
                  </p>
                  <p>
                    <span>
                      Pay-As-You-Use Pricing :- <br />
                    </span>
                    10% service charge is deducted for Premium plans, whereas no
                    service charge is deducted for Basic plans, for each
                    transaction (i.e., Transaction-Based Pricing)
                  </p>
                  <p>
                    <span>
                      {" "}
                      Unique ID :- <br />
                    </span>
                    Nerchapetti ID is a unique ID for easy identification of
                    each entity that is listed.
                  </p>
                  <p>
                    <span>
                      {" "}
                      Complimentary Website :- <br />
                    </span>
                    The link to this webpage can be shared with those interested
                    via WhatsApp or SMS.
                  </p>
                  <p>
                    <span>
                      Secure Transactions :- <br />
                    </span>
                    Our site is compliant with PCI
                    <i>
                      – DSS (Payment Card Industry – Data Security Standards)
                    </i>
                    &nbsp; requirements that are applicable for merchants.
                  </p>
                  <p>
                    <span>
                      {" "}
                      Payment Gateway Integration :- <br />
                    </span>
                    We have partnered with Cashfree Payments India Pvt Ltd.,
                    which is one of most popular payment gateways in India and
                    is used by over 50,000+ businesses. It provides various
                    payment options, as listed below:
                    <ul>
                      <li>
                        {" "}
                        Credit/Debit Card (Rupay, VISA, Master Card, Maestro,
                        Amex)
                      </li>

                      <li>
                        {" "}
                        Netbanking (All prominent Banks registered with Reserve
                        Bank of India)
                      </li>

                      <li>
                        {" "}
                        Wallets (Airtel Money, PhonePe, OLA Money, FreeCharge,
                        MobiKwik, RelianceJioMoney)
                      </li>

                      <li> UPI (GPay, PayTm, AmazonPay, PhonePe, BHIM)</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2>Digital Marketing</h2>
              <div className="full-paragraph">
                <p>
                  Social media is a powerful tool. For our Premium plan users,
                  we leverage social media to achieve the intended targets
                  defined. We do this by increasing the ‘reach’ of the promoted
                  content. Our objective is to establish an appropriate ‘reach’
                  in order to achieve the intended goals faster.
                </p>
              </div>
            </div>
            <div>
              <h2 style={{ fontSize: "25px" }}>Enrollment Process</h2>
              <div className="full-paragraph">
                <p>
                  There are three forms of fund-collection that we enroll in our
                  site:
                </p>
              </div>
              <div className="subpara">
                <p>
                  <span> Parish Enrollments :- &emsp; </span>
                  This is applicable for parishes and charitable institutions,
                  where users may give offerings on a regular basis.
                </p>
                <p>
                  <span> Patron Enrollments :- &emsp; </span>
                  This is intended for those individuals or
                  parishes/institutions which support one or more campaigns on
                  Nerchapetti.com
                </p>
                <p>
                  <span> Campaign Enrollments :- &emsp; </span>
                  This is applicable for crowd-funding initiatives where a
                  target amount and a target due date has been identified and is
                  worked upon. Only those patrons who are enrolled with us, may
                  enroll a campaign, on behalf of the beneficiary.
                </p>
              </div>
              <h2 style={{ fontSize: "25px" }}>Payment Process</h2>
              <div className="full-paragraph">
                <p>
                  We have implemented several preventive, detective and
                  corrective controls to secure the payment transactions through
                  our portal and enhance the overall governance process. Some of
                  controls, that we have thus implemented are as follows:
                </p>
                <div className="subpara">
                  <div>
                    <h3>Preventive Controls – examples</h3>
                    <p>
                      <span>Due Diligence :- &emsp; </span>
                      Only enrolled patrons may register a campaign, ensuring
                      appropriate due-diligence and oversight, which is thus
                      established by independent parties (i.e. our patrons with
                      social repute) before the campaign goes live, and after.
                    </p>
                    <p>
                      <span> KYC Process :- &emsp; </span>
                      We conduct a stringent KYC process, which have been
                      inspired from the Master Direction (MD) on KYC Guidelines
                      by the RBI, dated 25 February 2016.
                    </p>
                  </div>
                  <div>
                    <h3>Detective Controls – examples:</h3>
                    <p>
                      <span>Real-time Transaction Alert Mails :- &emsp;</span>
                      After a user initiates a transaction, a transaction alert
                      mail is triggered and sent to the user, the parish
                      representative and to our company. This email captures the
                      transaction id and other details with which we can trace
                      every single transaction made by a user.
                    </p>
                    <p>
                      <span>Effective Log Management Process :- &emsp;</span>
                      We have established an elaborate logging mechanism, on a
                      two-way email platform, so that there is a time-stamp for
                      each user activity.
                    </p>
                  </div>
                  <div>
                    <h3>Corrective Controls – examples:</h3>
                    <p>
                      <span>Customer Support Desk :- &emsp; </span>
                      We have a customer support desk instituted to address
                      customer issues in order to resolve them in a timely and
                      efficient manner.
                    </p>
                    <p>
                      <span> Periodic Reconciliation :- &emsp;</span>
                      We have instituted a periodic reconciliation process,
                      preferably on a monthly basis, wherein we solicit and
                      confirm with the organization that all the transactions
                      during the said period have been settled and credited into
                      the bank account that is registered with us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;
