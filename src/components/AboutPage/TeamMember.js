import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./about.scss";
import { Link } from "react-router-dom";

const TeamMember = ({ name, about, img, l, i, t }) => {
  return (
    <div className="member">
      <img src={img} alt={name} />
      <h3 className="name">{name}</h3>
      <p className="name-detail">{about}</p>
      <div className="detail-icon">
        {/* <a href={`https://instagram.com/${i}`}>
          <span>
            <FontAwesomeIcon
              style={{color: '#b0487b'}}
              className="icon"
              icon={faInstagram}
            />
          </span>
        </a>
        <a href={`https://twitter.com/${t}`}>
          <span>
            <FontAwesomeIcon
            style={{color: '#4ea6e8'}}
              className="icon"
              icon={faTwitter}
            />
          </span>
        </a> */}
        <a href={`https://linkedin.com/in/${l}`}>
          <span>
            <FontAwesomeIcon
            style={{color: '#2874b0'}}
              className="icon"
              icon={faLinkedin}
            />
          </span>
        </a>
      </div>
    </div>
  );
};
export default TeamMember;
