import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Explore from './Components/Explore'
import About from './Components/About'
import Cart from './Components/Cart'
import Product from "./Components/Product";
import { useState } from "react";
import Header from './Components/Header'

function App() {
  const [color, setColor] = useState("#FBD1D2");
  const [link, setLinkText] = useState(null);
  
  return (
    <Router>
      <Header bg={color} setText={(text) => setLinkText(text)} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/explore" component={Explore} />
        <Route path="/about" component={About} />
        {/* <Route path="/cart" component={Cart} /> */}
        <Route path='/Product/:id' component={Product} />
        <Route path='/cart/:path' component={Cart} />
      </Switch>
    </Router>
  );
}


export default App;