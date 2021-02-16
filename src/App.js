import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import ProjectForm from "./components/ProjectForm/ProjectForm"
import Login from "./components/Login/Login"

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        {/* id | projectName */}
                        <Route path='/project/:id' component={Projects}/>
                        <Route path='/addProject' component={ProjectForm}/>
                        <Route path='/login' component={Login}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
