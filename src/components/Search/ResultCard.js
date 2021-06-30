import React from 'react'
import { Link } from "react-router-dom";

const ResultCard = ({imageurl, id, title, category, nerchapettiId}) => {
    const createLink = (nerchapettiId) => {
        if(category === "parish"){
          return `/${nerchapettiId}`;
        } else if(category === "campaign"){
          return `/campaign-details/${id}`;
        } else if(category === "patron"){
          return `/patron/${id}/about`;
        }
      };

    return (
        <Link to={e => createLink(nerchapettiId)}>
        <div className="resultCard" >
          <div className="result-Card">
            <img className="result-img" src={imageurl} alt="na" />
            <p>{title}</p> 
          </div>

        </div>
        </Link>
    )
}

export default ResultCard
