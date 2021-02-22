import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ProjectForm from "./components/ProjectForm/ProjectForm"
import Login from "./components/Login/Login"
import LayoutImage from "./components/Layout/LayoutImage";
import LayoutThreeD from "./components/Layout/LayoutThreeD";
import {getProjects} from "./store/Actions/ProjectActions";
import {connect} from 'react-redux'

class App extends Component {
    // state = {
    //     loading: true
    // }
    //
    // componentDidMount() {
    //     setTimeout(function() {
    //         this.props.getProjects();
    //     }.bind(this), 1000)
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.projects !== this.props.projects) {
    //         this.setState({
    //             loading: false
    //         })
    //     }
    // }

    render() {
        // const {loading} = this.state;
        //
        // if (loading) { // if your component doesn't have to wait for async data, remove this block
        //     return null; // render null when app is not ready
        // }

        return (
            <div className="App">
                <BrowserRouter>
                    <Navigation/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/about' component={About}/>
                        <Route path='/addProject' component={ProjectForm}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/project/:id' component={LayoutImage}/>
                        <Route path='/project3D/:id' component={LayoutThreeD}/>
                    </Switch>
                    <Footer/>
                </BrowserRouter>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => dispatch(getProjects())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
