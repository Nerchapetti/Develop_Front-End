import emailjs from "emailjs-com";
import "./Contact.css";
import Header from "../NavBar/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";



function ContactUs() {
  const [isLoading, setisLoading] = useState(false)
  const [success, setsuccess] = useState(false)
  const [error, seterror] = useState(false)

  function sendEmail(e) {
    e.preventDefault();
    setisLoading(true)

    emailjs
      .sendForm(
        "service_y4gm0ph",
        "template_kk3yewe",
        e.target,
        "user_1sM8WqLiODpdRvbwWVH1a"
      )
      .then(
        (result) => {
          console.log(result.text);
          if(result.text === 'OK'){
            setsuccess(true)
            setisLoading(false)
            
          }
          else{
            seterror(true)
          }
        },
        (error) => {
          console.log(error.text);
          seterror(true)
        }
      );
  }

  if(error){
    return(
      <>
      <Header />
      <div className="error">
        <h1>Something went wrong !!! <br /> Please Try again after sometime</h1> 
      </div>
      <Footer />
      </>
    )
  }

  if(success){
    return(
      <>
      <Header />
      <div className="success">
        <h1>Message sent successfully!!!!</h1> 
      </div>
      <Footer />
      </>
    )
  }

  if(isLoading){
    return (
      <>
      <Header />
      <div className="isLoading"></div>
      <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="contactdata">
        <form className="contact-form" onSubmit={sendEmail}>

          <div className="form-data">
          <h1 style={{textAlign: "center"}}>Contact US</h1>
          </div>

          <div className="form-data">
            <select name="query" id="">
            <option value="s">Select a Query Type</option>
              <option value="general">General Query</option>
              <option value="patnership">Patnership Query</option>
              <option value="report">Report</option>
            </select>
          </div>
          <div className="form-data">
            <label>Phone No <span>*</span></label>
            <input name="contact_number" required />
          </div>
          <div className="form-data">
            <label>Name <span>*</span></label>
            <input type="text" name="user_name" required/>
          </div>

          <div className="form-data">
            <label>Email <span>*</span></label>
            <input type="email" name="user_email" required/>
          </div>

          <div className="form-data">
            <label>Message</label>
            <textarea rows="8" name="message" />
          </div>

          <div className="form-data">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
