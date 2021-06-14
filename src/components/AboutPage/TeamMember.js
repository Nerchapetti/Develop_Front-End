import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./about.css";
import { Link } from "react-router-dom";

const TeamMember = ({ name, about, img, l, i, t }) => {
  const handleMouseOver = (icon, e) => {
    if (icon === "instagram") {
      e.target.style.color === "#b0487b"
        ? (e.target.style.color = "")
        : (e.target.style.color = "#b0487b");
    } else if (icon === "twitter") {
      e.target.style.color === "#4ea6e8"
        ? (e.target.style.color = "")
        : (e.target.style.color = "#4ea6e8");
    } else if (icon === "linkedin") {
      e.target.style.color === "#2874b0"
        ? (e.target.style.color = "")
        : (e.target.style.color = "#2874b0");
    }
  };
  return (
    <div className="member">
      <img src={img} alt={name} />
      <h3 className="name">{name}</h3>
      <p className="name-detail">{about}</p>
      <div className="detail-icon">
        <a href={`https://instagram.com/{i}`}>
          <span>
            <FontAwesomeIcon
              onMouseOver={(e) => handleMouseOver("instagram", e)}
              className="icon"
              icon={faInstagram}
            />
          </span>
        </a>
        <a href={`https://twitter.com/${t}`}>
          <span>
            <FontAwesomeIcon
              onMouseOver={(e) => handleMouseOver("twitter", e)}
              className="icon"
              icon={faTwitter}
            />
          </span>
        </a>
        <a href={`https://linkedin.com/in/${l}`}>
          <span>
            <FontAwesomeIcon
              onMouseOver={(e) => handleMouseOver("linkedin", e)}
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
