import React, {Component} from 'react';
import './ProjectForm.css';
import {addProject} from "../../store/Actions/ProjectActions";
import {connect} from 'react-redux'
import bsCustomFileInput from 'bs-custom-file-input';
import {Redirect, withRouter} from 'react-router-dom';

class ProjectForm extends Component {
    state = {
        title: "",
        bannerImage: null,
        files: null,
        description: "",
        tDBool: false,
        tDFiles: null,
        layout: "1",
        dis: true,
    }

    componentDidMount() {
        bsCustomFileInput.init()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    selectFiles = (e) => {
        this.setState({
            [e.target.name]: e.target.files
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", this.state.title);

        formData.append("files", this.state.bannerImage[0]);

        let fileCounter = 0;
        for (const i of Object.keys(this.state.files)) {
            formData.append("files", this.state.files[i]);
            fileCounter++;
        }

        let tDFileCounter = 0;
        if (this.state.tDFiles != null) {
            for (const i of Object.keys(this.state.tDFiles)) {
                formData.append("files", this.state.tDFiles[i]);
            }
            tDFileCounter++;
        } else {
            formData.append("tDFiles", null);
        }

        formData.append("fileCounter", fileCounter.toString());
        formData.append("tDFileCounter", tDFileCounter.toString());
        formData.append("description", this.state.description);
        formData.append("tDBool", this.state.tDBool);
        formData.append("layout", this.state.layout);


        this.props.addProject(formData);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state !== prevState) {
            if (this.state.tDBool === "false") {
                this.setState({
                    tDBool: true,
                    dis: false,
                    layout: "2"
                })
                document.getElementById("layout2").checked = true;
            }
            if (this.state.tDBool === "true") {
                this.setState({
                    tDBool: false,
                    dis: true,
                    tDFiles: null,
                    layout: "1"
                })
                document.getElementById("layout1").checked = true;
            }
        }
        if (prevProps.status !== this.props.status) {
            this.props.history.push('/');
        }
    }

    render() {
        const {auth} = this.props;

        // if (!auth.uid) {
        //     return (
        //         <Redirect from="/addProject" to="/"/>
        //     )
        // }

        return (
            <section className="max-container">

                <div className="form-container">
                    <form>
                        <div className="w-100">
                            <div className="text-center">
                                <h2> Add Project </h2>
                            </div>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text" id="title" name="title"
                                   onChange={this.handleChange} placeholder="Project Name"/>
                        </div>

                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" id="bannerImage" name="bannerImage" className="custom-file-input"
                                       onChange={this.selectFiles}/>
                                <label className="custom-file-label" htmlFor="bannerImage"> Upload Display
                                    Image </label>
                            </div>
                        </div>

                        <br/>

                        <div className="form-group">
                                <textarea id="description" className="form-control" name="description" cols="46"
                                          rows="5"
                                          onChange={this.handleChange} placeholder="Project Description"/>
                        </div>

                        <div className="input-group">
                            <div className="custom-file">
                                <input type="file" multiple="multiple" id="files"
                                       onChange={this.selectFiles} name="files" className="custom-file-input"/>
                                <label className="custom-file-label overflow-hidden" htmlFor="files"> Upload Images /
                                    Videos of
                                    Project </label>
                            </div>
                        </div>

                        <br/>

                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input type="radio" id="tDBoolTrue" name="tDBool" value={true}
                                       onChange={this.handleChange}
                                       defaultChecked className="form-check-input"/>
                                <label htmlFor="3dBool" className="form-check-label"> No 3D File </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" id="tDBoolFalse" name="tDBool" value={false}
                                       onChange={this.handleChange} className="form-check-input"/>
                                <label htmlFor="3dBool" className="form-check-label"> I Have 3D Files </label>
                            </div>
                        </div>

                        <div className="input-group">
                            <div className="custom-file">

                                <input type="file" id="tDFiles" name="tDFiles" className="custom-file-input"
                                       disabled={this.state.dis}
                                       onChange={this.selectFiles} required={!this.state.dis}/>
                                <label className="custom-file-label" htmlFor="tDFiles"> Upload STL Files </label>
                            </div>
                        </div>

                        <br/>

                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input type="radio" id="layout1" name="layout" value="1"
                                       className="form-check-input"
                                       onChange={this.handleChange} disabled={!this.state.dis} defaultChecked/>
                                <label htmlFor="layout" className="form-check-label"> Layout With Image </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" id="layout2" name="layout" value="2"
                                       className="form-check-input"
                                       onChange={this.handleChange} />
                                <label htmlFor="layout" className="form-check-label"> Layout With 3D
                                    Interaction </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" id="layout3" name="layout" value="3"
                                       className="form-check-input"
                                       onChange={this.handleChange} />
                                <label htmlFor="layout" className="form-check-label"> Layout With 3D
                                    Interaction </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input type="radio" id="layout4" name="layout" value="4"
                                       className="form-check-input"
                                       onChange={this.handleChange} disabled={this.state.dis}/>
                                <label htmlFor="layout" className="form-check-label"> Layout With 3D
                                    Interaction </label>
                            </div>
                        </div>

                        <button onClick={this.handleSubmit} className="btn btn-primary w-100"> Add Project</button>

                    </form>
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        status: state.projects.status
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addProject: (project) => dispatch(addProject(project))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectForm))
