import "./App.css";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Cart from "./components/Cart";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Home />
        </Route>
        <Route path="/cart">
          <Navbar />
          <Cart />
        </Route>
      </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
