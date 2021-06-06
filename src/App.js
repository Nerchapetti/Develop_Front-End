import Campaigns from "./components/Campaigns/Campaigns";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Header";
import Parishes from "./components/Parishes/Parishes";



function App() {
  return (
    <div className="App">
      <Navbar />
      <Parishes />
      <Campaigns />
      <Footer />
    </div>
  );
}

export default App;
