import { BrowserRouter as Router, Switch, Route ,Link, Redirect} from "react-router-dom";
import About from "./components/AboutPage/About";
import CampaignDetails from "./components/Campaigns/CampaignDetails";
import HomePage from "./components/HomePage/HomePage";
import ParisheDetails from "./components/Parishes/ParishDetails";
import AllPatrons from "./components/Patron/AllPatrons";
import Contact from "./components/Contact/ContactUs";
import patron from "./components/Patron/Patron";
import { AMLPolicy } from "./components/Policies/AMLPolicy";
import { PrivacyPolicy } from "./components/Policies/PrivacyPolicy";
import { RefundPolicy } from "./components/Policies/RefundPolicy";
import { TermsOfUse } from "./components/Policies/TermsOfUse";


function App() {
  return (
    <div className="App">
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/campaign-details/:id" component={CampaignDetails} />
      <Route path="/parish-details/:id" component={ParisheDetails} />
      <Route path="/patrons" component={AllPatrons} />
      <Route path="/patron/:id" component={patron} />
      <Route path="/policies/aml-policy" component={AMLPolicy} />
      <Route path="/policies/privacy-policy" component={PrivacyPolicy} />
      <Route path="/policies/refund-policy" component={RefundPolicy} />
      <Route path="/policies/terms-of-use" component={TermsOfUse} />
    </Router>
    </div>
  );
}

export default App;
