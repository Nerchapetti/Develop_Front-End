import React from "react";
import Likes from "../Likes/Likes";
import "./About.scss";
import { BiMap } from "react-icons/bi";

const About = ({ parish }) => {
  return (
    <div className="parish-about">
      <h1 className="churchName">{parish.about.churchName}</h1>
      <img className="img" src={parish.imageUrl} alt="" />
      <Likes id={parish._id} likes={parish.likes} likeFor="parish" />
      <a href="https://goo.gl/maps/VecoGYZ6Keq1C4Av8" className="location">
        {" "}
        <BiMap />{" "}
      </a>
      <div className="content">
      <div dangerouslySetInnerHTML={{ __html: parish.about.content }} />
      </div>
    </div>
  );
};

export default About;
