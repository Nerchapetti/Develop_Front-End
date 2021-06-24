import React from 'react'
import { Link } from "react-router-dom";

const ResultCard = ({imageurl, id, title, category}) => {
    const handleClick = (id) => {
        if(category === "parish"){
          window.location = `/parish-details/${id}/about`;
        } else if(category === "campaign"){
          window.location = `/campaign-details/${id}`;
        } else if(category === "patron"){
          window.location = `/patron/${id}/about`;
        }
      };

    return (
        <div className="resultCard"  onClick={() => handleClick(id)}>
          <div className="result-Card">
            <img className="result-img" src={imageurl} alt="na" />
            <p>{title}</p> 
          </div>

        </div>
    )
}

export default ResultCard
