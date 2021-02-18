import React, {Component} from 'react';
import './Home.css'
import ClickableImage from "./ClickableImage";
import {connect} from 'react-redux';

class Home extends Component {

    render() {
        const {projects} = this.props;

        return (
            <section className="max-container">
                <div className="grid">
                    <ClickableImage projects={projects}/>
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

export default connect(mapStateToProps,null)(Home);
