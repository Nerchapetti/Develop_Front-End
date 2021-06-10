import React from "react";


const Location = ({ parish }) => {
  return (
    <div>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            title="gmap"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15633.208564881394!2d75.591816!3d11.601795!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba68466c31748bf%3A0x3cc92cfc67ca7419!2sVatakara%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sus!4v1623347965647!5m2!1sen!2sus"
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
