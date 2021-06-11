import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import { useParams, useRouteMatch } from "react-router"
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import About from "./About";
import Campaigns from "./Campaigns";
import Contact from "./Contact";
import Family from "./Family";
import Orientation from "./Orientation";
import Parishes from "./Parishes";
import "./Patron.css";
import PatronDetails from "./PatronDetails";
import getPatron from "../../API/getPatron";


const Patron = () => {
    let { url } = useRouteMatch();
    let {id} = useParams()
    const [patronDetails, setpatronDetails] = useState()
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

    const handleClick = (e) => {
    
      document.querySelectorAll(".detail li").forEach(i => {
        i.classList.remove('active')
      })
  
      e.target.parentElement.classList.add("active")
  
    }
  
  
    console.log(id);
    const routes = [
        {
            path: `${url}/about`,
            exact: true,
            main: () => <About patron={patronDetails}/>,
        },
        {
            path: `${url}/contact`,
            main: () => <Contact patron={patronDetails}/>,
        },
        {
            path: `${url}/orientation`,
            main: () => <Orientation patron={patronDetails}/>,
        },
        {
            path: `${url}/family`,
            main: () => <Family patron={patronDetails}/>,
        },
        {
            path: `${url}/campaigns`,
            main: () => <Campaigns patron={patronDetails}/>,
        },
        {
            path: `${url}/parish`,
            main: () => <Parishes patron={patronDetails}/>,
        },
    ];

    if(!patronDetails){
      return(
        <>
        <Header />
        <div className="isLoading"></div>
        <Footer />
        </>
      )
    }
    return (
    <div className="main">
      <Header />
      <div className="main-container">
        <PatronDetails />
      </div>
      <div className="details">
        <Router>
          <div>
            <div className="detail">
              <ul>
                <li className="active" onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/about`}>About</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/contact`}>Contact</Link>
                </li>
                <li  onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/orientation`}>Orientation</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/family`}>Family</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/campaigns`}>Campaigns</Link>
                </li>
                <li onClick={(e) => handleClick(e)}>
                  <Link to={`${url}/parish`}>Parish</Link>
                </li>
              </ul>
            </div>
            <div>
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
          </div>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default Patron;
