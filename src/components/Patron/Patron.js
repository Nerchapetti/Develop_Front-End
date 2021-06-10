import { faFacebookF, faInstagram, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../NavBar/Header";
import './Patron.css';

const routes = [
    {
      path: "/about",
      exact: true,
      sidebar: () => <div></div>,
      main: () => <div className="About">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Date of Birth : 18-05-1966Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Date of Birth : 18-05-1966eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Date of Birth : 18-05-1966</p>
      </div>
    },
    {
      path: "/Contact",
      sidebar: () => <div></div>,
      main: () => <div className="contact">
        <ul class="list">
            <li>Name: <br/><span>Fr.MATHEW P. RAJU</span></li>
            <li>Phone: <br/><span> 9447661961 , 9417261322</span></li>
            <li>Address: <br/><span> Address </span></li>
            <div className="socialmedia">
                <li className=""><FontAwesomeIcon icon={faFacebookF} /></li>
                <li className=""><FontAwesomeIcon icon={faInstagram}/></li> 
                <li className=""><FontAwesomeIcon icon={faYoutube}/></li>
                <li className=""><FontAwesomeIcon icon={faTwitter}/></li>        
                <li className=""><FontAwesomeIcon icon ={faVoicemail} /></li> 
            </div>
        </ul>
      </div>
    },
    {
      path: "/Orientation",
      sidebar: () => <div></div>,
      main: () => <div className="orientation">
          <div className="dates">
              <h3>Date of orientation</h3>
              <ul>
                  <li>31-12-1994 (Sub-Deacon)</li>
                    <li>15-08-1995 (Deacon)</li>
                    <li>23-09-1995 (Priest)</li>
              </ul>
          </div>
          <div className="tabledata">
              <h1 className="tablehead">List of Churches and Institutions Served</h1>
              <table border="1">
                  <tr>
                      <th>S No</th>
                      <th>Churches</th>
                      <th>Institutions</th>
                      <th>Year</th>
                  </tr>
                  <tr>
                      <td className="no">1</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
                  <tr>
                      <td className="no">2</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
                  <tr>
                      <td className="no">3</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
                  <tr>
                      <td className="no">4</td>
                      <td>St. Mary’s Orthodox Church, Chandigarh</td>
                      <td>St. Mary’s School, Chandigarh (Chairman)</td>
                      <td>	2014-onwards</td>
                  </tr>
              </table>
          </div>
      </div>
    },
    {
        path: "/family",
        sidebar: () => <div></div>,
        main: () => <div className="family">
        <ul class="list">
            <li>Name:Wife :  <br/><span>Mrs. Susan Jacob</span></li>
            <li>Phone: <br/><span> 9447661961 , 9417261322</span></li>
            <li>gmail <br/><span> abc@gmail.com </span></li>
        </ul>
        </div>
    },
    {
        path: "/Campaigns",
        sidebar: () => <div></div>,
        main: () => <div></div>// campaigns data here
    },
    {
        path: "/Parish",
        sidebar: () => <div></div>,
        main: () =>    <div className="Parishes-containor">
        {/* { Parishesdata.map((data) => ( */}
            {/* <Link to={`/parish-details/${data._id}`}> */}
                <div className ="cards" >
                {/* key={data._id} */} 
                    <div className="images">
                        {/* <img src={createImgURL(data)} alt="" /> */}
                        <img src="http://www.nerchapetti.com/patron/images/priest.png" />
                    </div>
                    <div className="catagory">
                            data.churchcategory
                    </div>
                    <div className="churchname">
                        data.churchName
                    </div>
                    <div className="about">
                        data.content
                    </div>
                    <div className="location">
                        <p>location : data.location</p>
                    </div>
                    <div className="share">
                    
                        
                        
                        {/* <WhatsappShareButton url="http://nerchapetti.com"><FontAwesomeIcon className = "shareicon" icon={faShareAlt} /> </WhatsappShareButton> */}
                    
                    </div>
                </div>
            {/* </Link> */}
            
        ))
        {/* } */}

    </div>
    },
  ];
  

const patron = () => {
    return ( 
        <div className="main">
            <Header />
            <div className="main-container">
            <img src="http://www.nerchapetti.com/patron/images/priest.png"/>
                <div class="section">
                <h1>Fr.MATHEW P. RAJU</h1>
                <button>Contribute</button>
                </div>
            </div>
            <div className="details">
            <Router>
            <div>
                <div className="detail">
                <ul>
                    <li>
                    <Link to="/about">About</Link>
                    </li>
                    <li>
                    <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                    <Link to="/Orientation">Orientation</Link>
                    </li>
                    <li>
                    <Link to="/Family">Family</Link>
                    </li>
                    <li>
                    <Link to="/Campaigns">Campaigns</Link>
                    </li>
                    <li>
                    <Link to="/Parish">Parish</Link>
                    </li>
                </ul>

                <Switch>
                    {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.sidebar />}
                    />
                    ))}
                </Switch>
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
}
 
export default patron;