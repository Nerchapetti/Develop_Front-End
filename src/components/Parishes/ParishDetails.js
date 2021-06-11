import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import "./ParishDetails.css";
import { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router";
import getRequest from "../../API/getRequest";
import Payment from "./Payment";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import About from "./About";
import Committe from "./Committe";
import Offerings from "./Offerings";
import Location from "./Location";

const ParisheDetails = () => {
  let { url } = useRouteMatch();
  const [parishData, setParishData] = useState();
  const [error, seterror] = useState("");
  const { id } = useParams();

  const [click, setclick] = useState("")
  

  const handleClick = (e) => {
    
    document.querySelectorAll(".inner-nav li").forEach(i => {
      i.classList.remove('active')
    })

    e.target.parentElement.classList.add("active")

  }


  console.log(url);
  useEffect(() => {
    getRequest(`http://localhost:5000/get-parish/${id}`)
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
      path: `${url}/about`,
      main: () => <About parish={parishData} />,
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
      path: `${url}/location`,
      main: () => <Location parish={parishData} />,
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
                  <Link to={`${url}/about`}>About</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/committe-members`}>Committe</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/offerings`}>Offerings</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/location`}>Location</Link>
                </li>
              </ul>
            </div>
            <div className="parish-contents">
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
          <Payment />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ParisheDetails;
