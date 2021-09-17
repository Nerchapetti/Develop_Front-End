import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Likes from "../Likes/Likes";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import "./About.scss";
import { CopyToClipboard } from 'react-copy-to-clipboard';


const About = ({ parish }) => {
  const [copyText, setcopyText] = useState(parish.nerchapettiId)
  const [copied, setcopied] = useState(false)
  return (
    <div className="parish-about">
      <h1 className="churchName">{parish.about.churchName}</h1>

      <div style={{justifyContent: 'center', marginBottom: 20}} className="nerchapettiId">
        <p className="id">Nerchapetti ID : {parish.nerchapettiId}</p>
        <CopyToClipboard text={copyText}
          onCopy={() => setcopied(true)}>
          <button className="copybtn"><FontAwesomeIcon color={'blue'} icon={faClipboard} /></button>
        </CopyToClipboard>
      </div>

      <img className="img" src={parish.imageUrl} alt="" />
      
      <Likes id={parish._id} likes={parish.likes} likeFor="parish" />
      
      <div className="content">
        <div dangerouslySetInnerHTML={{ __html: parish.about.content }} />
      </div>
    </div>
  );
};

export default About;
