import React from 'react'
import { Link } from "react-router-dom";

const ResultCard = ({result}) => {

    const handleClick = (id) => {
        window.location = `/parish-details/${id}/about`;
      };

    return (
        <div className="resultCard">
            <Link
            to={`/parish-details/${result._id}/about`}
            onClick={() => handleClick(result._id)}
          >
          <div className="result-Card">
            <img className="result-img" src={result.imageUrl} alt="" />
            <p>{result.about.churchName}</p>
          </div>
            </Link>
        </div>
    )
}

export default ResultCard
