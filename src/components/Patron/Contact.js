import { faLandmark, faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./contact.scss"
const Contact = ({patron}) => {
    return (
    <div className="contact">
        <div className="phone">
            <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
            <div className="numbers">
            {patron.contact.phoneNumber.map((phone, i) => (
            <p key={i}>{phone}</p>

            ))}
            </div>
        </div>

        <div className="email">
            <FontAwesomeIcon className="icon" icon={faMailBulk} />
            <p>{patron.contact.email}</p>
        </div>

        <div className="location">
            <FontAwesomeIcon className="icon" icon={faLandmark} />
            <p>{patron.contact.presentAddress.city}</p>
            <p>{patron.contact.presentAddress.state}</p>
            <p>{patron.contact.presentAddress.pin}</p>
        </div>
    </div>
    )
}

export default Contact
