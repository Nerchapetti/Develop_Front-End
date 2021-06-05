import Campaigns from "./components/Campaigns/Campaigns";
import Navbar from "./components/NavBar/Header";
import Parishes from "./components/Parishes/Parishes";



function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Parishes /> */}
      <Campaigns />
    </div>
  );
}

export default App;
