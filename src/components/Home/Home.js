import React, {Component} from 'react';
import './Home.css'
import ClickableImage from "./ClickableImage";
import {connect} from 'react-redux';

class Home extends Component {
    render() {
        const {projects} = this.props;
        return (
            <section className="max-container">
                <div className="home-layout">
                    <div className="grid pl-4 pr-4">
                        <ClickableImage projects={projects}/>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects.projects
    }
}

export default connect(mapStateToProps, null)(Home);
