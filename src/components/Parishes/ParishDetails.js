import Footer from '../Footer/Footer';
import Header from '../NavBar/Header';
import './ParishDetails.css';
import { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import getRequest from '../../API/getRequest';
import Payment from './Payment';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import About from './About';
import Committe from './Committe';
import Offerings from './Offerings';
import Location from './Location';


const ParisheDetails = () => {
    let { url } = useRouteMatch();
    const [parishData, setParishData] = useState()
    const {id} = useParams()
    useEffect(() => {
        getRequest(`http://localhost:5000/get-parish/${id}`)
        .then(res => {
            console.log(res)
            setParishData(res.data)
        })
        .catch(err => console.log(err))
    }, [])


    if(!parishData){
        return (
            <div className="isLoading">
                <h1>Loading...</h1>
            </div>
        )
    }

    const routes = [
        {
            path: `${url}/about`,
            main: () => <About parish={parishData}/>
        },
        {
            path: `${url}/committe-members`,
            main: () => <Committe parish={parishData}/>
        },
        {
            path: `${url}/offerings`,
            main: () => <Offerings parish={parishData}/>
        },
        {
            path: `${url}/location`,
            main: () => <Location parish={parishData}/>
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
                <li>
                  <Link to={`${url}/about`}>About</Link>
                </li>
                <li>
                  <Link to={`${url}/committe-members`}>Committe</Link>
                </li>
                <li>
                  <Link to={`${url}/offerings`}>Offerings</Link>
                </li>
                <li>
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
            {/* <div className="church_detail">
                <h1>About the {parishData.churchName}</h1>
                <p>{parishData.content}, <br /> location:  {parishData.location}</p>
            </div> */}
            <div className="details">
                <Payment />
            </div>
        </div>
        <Footer />
        </>
     );
}
 

export default ParisheDetails;