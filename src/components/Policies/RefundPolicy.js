import React from "react";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./privacy.css"

export const RefundPolicy = () => {
  return (
    <div>
      <Header />

      <div className="refund-policy">

      <h1>Refund Policy</h1>
      
      <p>
      <b>John Zakariah Technologies reserves the right to refuse/cancel any order. </b>
      </p>
      <p>
John Zakariah Technologies at its sole discretion may cancel any order(s): 

      </p>

      <ul>
    
        <li>i. If it suspects a fraudulent transaction, or </li>
        <li>ii. If it suspects a customer has undertaken a transaction which is not in accordance with the Terms of Use or </li>
        <li>iii. For any reason outside the control of the company including causes for delivery related logistical difficulties.</li>
      </ul>
    
    
<p>
Refund/cancellation policies applicable in the following conditions:
</p>
<ul>
  <li>a) In case, the buyer cancels the order online before the product has been shipped, the entire order amount will be refunded. </li>
  <li>b) In case the item ordered has been shipped but has not yet been delivered to the buyer, the order can still be cancelled online. Total order amount after deduction of shipment and handling charges will be refunded. The refund will be processed, once NDR receives the originally ordered item back intact from the courier. </li>
  <li>c) However, the order once delivered cannot be cancelled in any case.</li>
  <li>d) In case of failed transactions or double realization of account for the same order, the total deducted amount will be refunded.</li>
  <li>e) In case of cancelled order/failed transactions, the bank/card transaction charges of the buyer, if any, is likely to be forfeited</li>
  <li>f) John Zakariah Technologies offers no guarantees whatsoever for the accuracy or timeliness of the refunds in the buyer’s card/account </li>
  <li>g) In case of part cancellations, the amount refunded will be corresponding to the part cancellation</li>
</ul>
    
    
    
    
    
    
    
    </div>
      <Footer />
    </div>
  );
};
