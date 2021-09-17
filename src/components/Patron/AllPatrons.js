import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getAllPatrons from "../../API/getAllPatrons";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";

const AllPatrons = () => {
  const [patrons, setpatrons] = useState();

  useEffect(() => {
    getAllPatrons()
      .then((res) => {
        setpatrons(res.data);
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  if (!patrons) {
    return (
      <>
        <Header />
        <div className="isLoading"></div>
        <Footer />
      </>
    );
  }

  return (
    <div>
      <Header />
          <div className="allpatrons">
            {patrons.length === 0 && <h1>No patrons found</h1> }
            {patrons.map((patron, i) => (
              <>
                  <Link to={`/patron/${patron.nerchapettiId}`}>
                    <div className="patron" key={i}>
                      <div className="image">
                        <img src={patron.imageUrl} alt="patronimage"/>
                      </div>
                      <div className="details">
                        <h1 style={{textAlign: "right"}}>{patron.about.name}</h1>
                        {/* <p dangerouslySetInnerHTML={ {__html: patron.about.about.slice(0, 25)} }></p> */}
                      </div>
                    </div>
                  </Link>
              </>
            ))}
          </div>
      <Footer />
    </div>
  );
};

export default AllPatrons;
