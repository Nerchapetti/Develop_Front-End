import Campaigns from "./components/Campaigns/Campaigns";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/Header";
import Parishes from "./components/Parishes/Parishes";
import Parishes_detail from "./components/parishes_page/parishes_page";



function App() {
  return (
    <div className="App">
        <Navbar />
        <Parishes_detail />
        {/* <Parishes />
        <Campaigns /> */}
        <Footer />
    </div>
  );
}

export default App;
