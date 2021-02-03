import React, {Component} from 'react';
import './ProjectForm.css';
import {addProject} from "../../store/Actions/ProjectActions";
import {connect} from 'react-redux'

class ProjectForm extends Component {
    state = {
        'title': "",
        'bannerImage': null,
        'files': [],
        'description': "",
        '3dfiles': [],
        'layoutSelection': 1
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <section className="max-container">

            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProject: (project) => dispatch(addProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
