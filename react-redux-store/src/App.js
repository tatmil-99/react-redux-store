import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </BrowserRouter>

  );
}

export default App;
