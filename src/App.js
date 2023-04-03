import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  Locations from "./Components/Locations";
import Pokemon from "./Components/Pokemon";
import Berries from "./Components/Berries";
import Home from "./Components/Home";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="app">

      <Router>
       <div className="wapper">
        <Nav/>
        
        <Routes>
          <Route exact path="/" element={ <Home/>}/>
          <Route path="/berries" element={ <Berries/>}/>
          <Route path="/pokemon" element={ <Pokemon/>}/>
          <Route path="/locations" element={ <Locations/>}/>
        </Routes>
        </div>  
      </Router>
    </div>
  );
}

export default App;
