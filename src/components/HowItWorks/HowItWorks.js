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
                https://www.sisainfosec.com/certificate.php?number=69377469293285406315&type=pcidss]
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
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HowItWorks;

// What about Security?

// Yes, this is secure. Your online payments are safe and secure with Nerchapetti.com

// We have considered the PCI-DSS (Payment Card Industry - Data Security Standards) requirements for merchants while designing and building nerchapetti.com. The PCI Standards Council (SSC) is responsible for the development of the standards for PCI compliance. Its purpose is to help secure and protect the entire payment card ecosystem. These standards apply for merchants, service providers processing credit/debit card payment transactions. Payment Card Industry (PCI) compliance was suggested by our payment gateway provider to help ensure the security of credit card transactions on the website.

// As part of this process, we ensure that the data is encrypted during transmission and while at rest, that the access to systems are process-driven, and monitored using audit logs, we restrict access to data on a need-to-know basis, unique ids are assigned to each person with computer access, in order to ensure accountability for their actions, etc are some of the controls that we ensure as part of the PCI-DSS compliance guidelines.

// We use Cashfree Payments India Ltd., as our Payment Gateway partner, which is a company registered in Bangalore. All our transactions are currently processed through Cashfree, and Cashfree is a full-stack payments solution. It helps Indian businesses accept and send money and is used by 50,000+ businesses for vendor payouts, wage payouts, bulk refunds, etc. Cashfree offers the highest number of payment modes in India via a single integration -- including Pay Later, Paytm, Cardless EMI, and even recurring subscription payments.

// Cashfree is a PCI-DSS v3.2.1 certified company which means we adhere to the regulations of the PCI and maintain a secure environment for credit card transactions.  has been PCI-DSS certified by SISA Information Security, as a 'Service Provider'. (Certificate Number: PCI/COC/CPIPL12021; Type of Certification: PCI DSS v3.2.1) [Provide a link to the certificate here - https://www.sisainfosec.com/certificate.php?number=69377469293285406315&type=pcidss]

// Cashfree is also an ISO/IEC 27001:2013 certified payment company which means the company has implemented all the procedures and processes recommended by the Information Security Management System (ISMS) policy. Cashfree is compliant with all the requirements for establishing, implementing, maintaining, and continually improving an information security management system (ISMS) – the aim of which is to help companies make the information assets they hold much more secure.
// While we at Nerchapetti ensure your data is secure with us, here are some simple to-dos that are recommended to be followed you to ensure maximum security:

// Do not share your personal bank details like card number, CVV, PIN, and OTP via any mode of communication like calls, texts, or emails
// Cashfree will never ask you for any of the above-mentioned information
// Please make sure your accounts are secured with strong passwords. Do not write them down that can be accessed by anyone else
