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
        <Link to={`/patron/${patron._id}/about`}>
          <p>Patron Details</p>
          <p>{patron.Name}</p>
          </Link>
        </>
      ))}
      <Footer />
    </div>
  );
};

export default AllPatrons;
