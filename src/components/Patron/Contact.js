import { faFacebookF, faInstagram, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLandmark, faLocationArrow, faMailBulk, faPhone, faPhoneAlt, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { EmailIcon } from 'react-share';
import "./contact.css"
const Contact = ({patron}) => {
    return (
    <div className="contact">
        <div className="phone">
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <div className="numbers">
            <p>9747406685</p>
            <p>9747406685</p>
            </div>
        </div>

        <div className="email">
            <FontAwesomeIcon className="icon" icon={faMailBulk} />
            <p>rahulmanoj@cet.ac.in</p>
        </div>

        <div className="location">
            <FontAwesomeIcon className="icon" icon={faLandmark} />
            <p>Paravan Kandi Meethal</p>
            <p>Puthur</p>
            <p>Vadakara</p>
            <p>673104</p>
        </div>
    </div>
    )
}

export default Contact
