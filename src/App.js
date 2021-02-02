import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
