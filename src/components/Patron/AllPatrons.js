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
      {patrons.map((patron) => (
        <>
          <div className="allpatrons">
            <Link to={`/patron/${patron._id}/about`}>
              <div className="patron">
                <div className="image">
                  <img src="http://www.nerchapetti.com/patron/images/priest.png" />
                </div>
                <div className="details">
                  <h1>Name</h1>
                </div>
              </div>
            </Link>

            <Link to={`/patron/${patron._id}/about`}>
              <div className="patron">
                <div className="image">
                  <img src="http://www.nerchapetti.com/patron/images/priest.png" />
                </div>
                <div className="details">
                  <h1>Name</h1>
                </div>
              </div>
            </Link>

            <Link to={`/patron/${patron._id}/about`}>
              <div className="patron">
                <div className="image">
                  <img src="http://www.nerchapetti.com/patron/images/priest.png" />
                </div>
                <div className="details">
                  <h1>Name</h1>
                </div>
              </div>
            </Link>

            <Link to={`/patron/${patron._id}/about`}>
              <div className="patron">
                <div className="image">
                  <img src="http://www.nerchapetti.com/patron/images/priest.png" />
                </div>
                <div className="details">
                  <h1>Name</h1>
                </div>
              </div>
            </Link>

            <Link to={`/patron/${patron._id}/about`}>
              <div className="patron">
                <div className="image">
                  <img src="http://www.nerchapetti.com/patron/images/priest.png" />
                </div>
                <div className="details">
                  <h1>Name</h1>
                </div>
              </div>
            </Link>
          </div>

         
        </>
      ))}
      <Footer />
    </div>
  );
};

export default AllPatrons;
