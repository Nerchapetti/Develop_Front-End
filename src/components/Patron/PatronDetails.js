import { useState, useEffect } from "react";
import { useParams } from "react-router";
import getPatron from "../../API/getPatron";


const PatronDetails = () => {
  const { id } = useParams();
  const [patronDetails, setpatronDetails] = useState();

  useEffect(() => {
    getPatron(id)
      .then((res) => {
        setpatronDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!patronDetails) {
    return (
      <>
        <div className="isLoading"></div>
      </>
    );
  }

  return (
    <>
      <img
        src="http://www.nerchapetti.com/patron/images/priest.png"
        alt="patron"
      />
      <div class="section">
        <h1>{patronDetails.Name}</h1>
        
      </div>
    </>
  );
};

export default PatronDetails;
