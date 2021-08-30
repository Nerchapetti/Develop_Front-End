import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./ParishDetails.scss";
import { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router";
import getRequest from "../../API/getRequest";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Committe from "./Committe";
import Offerings from "./Offerings";
import Location from "./Location";
import QurbanaPanam from "./QurbanaPanam";
import Gallery from "./Gallery";

const ParisheDetails = () => {
  let { url } = useRouteMatch();
  const [parishData, setParishData] = useState();
  const [error, seterror] = useState("");
  const { id } = useParams();

  

  const handleClick = (e) => {
    
    document.querySelectorAll(".inner-nav li").forEach(i => {
      i.classList.remove('active')
    })

    e.target.parentElement.classList.add("active")

  }


  console.log(url);
  useEffect(() => {
    getRequest(`${process.env.REACT_APP_API_URI}/get-parish-id/${id}`)
      .then((res) => {
        if (res.status === "ok") {
          console.log(res);
          setParishData(res.data);
        } else {
          seterror(res);
          console.log(res);
        }
      })
      .catch((err) => {
        seterror(err)
        console.log(err);
      });
  }, []);

  if(error){
    return (
      <div className="error">
        Oops! something went wrong
      </div>
    )
  }

  if (!parishData) {
    return (
      <div className="isLoading">
        <h1>Loading...</h1>
      </div>
    );
  }

  const routes = [
    {
      path: `${url}`,
      main: () => <About parish={parishData} />,
      exact: true
    },
    {
      path: `${url}/gallery`,
      main: () => <Gallery parish={parishData} />,
      exact: true
    },
    {
      path: `${url}/committe-members`,
      main: () => <Committe parish={parishData} />,
    },
    {
      path: `${url}/offerings`,
      main: () => <Offerings parish={parishData} />,
    },
    {
      path: `${url}/qurbana-panam`,
      main: () => <QurbanaPanam parish={parishData} />,
    },
  ];

  return (
    <>
      <Header />
      <div className="main-container">
        <Router>
          <>
            <div className="inner-nav">
              <ul>
                <li className="active" onClick={(e) => handleClick(e)}>
                  <Link to={`${url}`}>About</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/gallery`}>Gallery</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/committe-members`}>Committee</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/offerings`}>Offerings</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/qurbana-panam`}>Qurbana Panam</Link>
                </li>
              </ul>
            </div>
            <div className="parish-contents">
              {/* <About parish={parishData} /> */}
              <Switch>
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                  />
                ))}
              </Switch>
            </div>
          </>
        </Router>
        <div className="details">
          <Payment vendorEmail={parishData.about.email} plan={parishData.plan} bank={parishData.bankAccount} nerchapettiId={parishData.nerchapettiId}/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParisheDetails;
