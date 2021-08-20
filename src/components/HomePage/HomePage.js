import Campaigns from "../Campaigns/Campaigns";
import Header from "../NavBar/Header";
import Parishes from "../Parishes/Parishes";
import Footer from "../Footer/Footer";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Parishes />
      <Campaigns />
      <Footer />
    </div>
  );
};

export default HomePage;
