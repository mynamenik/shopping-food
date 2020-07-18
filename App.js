import React from 'react';
import './App.css';
import Admin from "./Admin";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./ProductList";
import Cart from "./Cart";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/Admin" component={Admin} />
          <Route exact path="/" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/" component={Login} />

          {/* <Route path="/Terms & Conditions" component={TC} />
            <Route path="/Register" component={Register} /> */}
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;
