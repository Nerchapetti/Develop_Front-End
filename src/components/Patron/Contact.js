import { faFacebookF, faInstagram, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = ({patron}) => {
    return (
        <div className="contact">
        <ul class="list">
            <li>Name: <br/><span>{patron.Name}</span></li>
            <li>Phone: <br/><span> {patron.contact.contactNumber1}, {patron.contact.contactNumber2}</span></li>
            <li>Address: <br/><span> {patron.contact.presentAddress} </span></li>
            <div className="socialmedia">
                <li className=""><FontAwesomeIcon icon={faFacebookF} /></li>
                <li className=""><FontAwesomeIcon icon={faInstagram}/></li> 
                <li className=""><FontAwesomeIcon icon={faYoutube}/></li>
                <li className=""><FontAwesomeIcon icon={faTwitter}/></li>        
                <li className=""><FontAwesomeIcon icon ={faVoicemail} /></li> 
            </div>
        </ul>
      </div>
    )
}

export default Contact
