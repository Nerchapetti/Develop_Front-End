import React from "react";
import "./About.css"

const Location = ({ parish }) => {
  console.log("working");
  console.log(parish.about.location);

  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000!2d-121.9035969!3d37.3321023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1486486434098"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;


// https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31266.158362796563!2d75.57282661810392!3d11.604104484564576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba68344896930c1%3A0xd5c55e27d7874b34!2sKanal%20View%20Point!5e0!3m2!1sen!2sin!4v1628538136304!5m2!1sen!2sin
// https://goo.gl/maps/BvVftYpSBrBv3bX98