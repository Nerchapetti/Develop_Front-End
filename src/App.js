import { BrowserRouter as Router, Switch, Route ,Link, Redirect} from "react-router-dom";
import About from "./components/AboutPage/About";
import CampaignDetails from "./components/Campaigns/CampaignDetails";
import HomePage from "./components/HomePage/HomePage";
import ParisheDetails from "./components/Parishes/ParishDetails";

function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route path="/campaign-details/:id" component={CampaignDetails} />
      <Route path="/parish-details/:id" component={ParisheDetails} />
    </Router>
      
      
    </div>
  );
}

export default App;
