import React, {Component} from 'react';
import './ProjectForm.css';
import {addProject} from "../../store/Actions/ProjectActions";
import {connect} from 'react-redux'
import {Redirect} from "react-router";

class ProjectForm extends Component {
    state = {
        title: "",
        bannerImage: undefined,
        files: undefined,
        description: "",
        tDBool: false,
        tDFiles: undefined,
        layoutSelection: "1",
        dis: true,
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

        for (const i of Object.keys(this.state.files)) {
            formData.append("files", this.state.files[i]);
        }

        formData.append("files", this.state.tDFiles[0]);

        formData.append("description", this.state.description);
        formData.append("tDBool", this.state.tDBool);
        formData.append("layout", this.state.layoutSelection);


        this.props.addProject(formData);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state !== prevState) {
            if (this.state.tDBool === "false") {
                this.setState({
                    tDBool: true
                })
                this.setState({
                    dis: false
                })
                document.getElementById("layoutSelection2").checked = true;
            }
            if (this.state.tDBool === "true") {
                this.setState({
                    tDBool: false
                })
                this.setState({
                    dis: true
                })
                document.getElementById("layoutSelection1").checked = true;
            }
        }
    }

    render() {
        // const {auth} = this.props;
        //
        // if (!auth.uid) {
        //     return (
        //         <Redirect from="/addProject" to="/"/>
        //     )
        // }

        return (
            <section className="max-container">
                <div className="text-center p-3 w-100">
                    <div className="form-container">
                        <h3> Add Project </h3>
                        <form className="form">
                            <ul>
                                <li>
                                    <label> Project Name </label>
                                    <br/>
                                    <input type="text" id="title" name="title" onChange={this.handleChange}/>
                                    <br/>
                                    <span> Project Name </span>
                                </li>
                                <li>
                                    <label> Banner Image </label>
                                    <div className="button-wrap">
                                        <label className="button" htmlFor="bannerImage">Upload</label>
                                        <input type="file" id="bannerImage" name="bannerImage"
                                               onChange={this.selectFiles}/>
                                    </div>
                                </li>
                                <li>
                                    <label>Description</label>
                                    <br/>
                                    <textarea id="description" name="description" cols="46" rows="5"
                                              onChange={this.handleChange}/>
                                    <br/>
                                    <span> Project Description </span>
                                </li>
                                <li>
                                    <label> Images / Videos </label>
                                    <div className="button-wrap">
                                        <label className="button" htmlFor="files"> Upload </label>
                                        <input type="file" multiple="multiple" id="files"
                                               onChange={this.selectFiles} name="files"/>
                                    </div>
                                </li>
                                <li>
                                    <input type="radio" id="tDBoolTrue" name="tDBool" value={true}
                                           onChange={this.handleChange}
                                           defaultChecked/>
                                    <label htmlFor="3dBool"> No 3D File </label>
                                    <input type="radio" id="tDBoolFalse" name="tDBool" value={false}
                                           onChange={this.handleChange}/>
                                    <label htmlFor="3dBool"> I Have a 3D File </label>
                                </li>
                                <li>
                                    <label> 3D Files </label>
                                    <div className="button-wrap">
                                        <label className="button" htmlFor="tDFiles"> Upload </label>
                                        <input type="file" id="tDFiles" name="tDFiles"
                                               disabled={this.state.dis}
                                               onChange={this.selectFiles} required={!this.state.dis}/>
                                    </div>
                                </li>
                                <li>
                                    <label> Page Format </label>
                                    <br/>
                                    <input type="radio" id="layoutSelection1" name="layoutSelection" value="1"
                                           onChange={this.handleChange} disabled={!this.state.dis} defaultChecked/>
                                    <label htmlFor="layoutSelection"> Image 1 </label>
                                    <input type="radio" id="layoutSelection2" name="layoutSelection" value="2"
                                           onChange={this.handleChange} disabled={this.state.dis}/>
                                    <label htmlFor="layoutSelection"> Image 2 </label>
                                    <br/>
                                    <span> Select a layout </span>
                                </li>
                                <li>
                                    <button onClick={this.handleSubmit}> Add Project</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
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
