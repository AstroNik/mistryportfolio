import React from 'react';
import './Login.css';
import {connect} from 'react-redux'
import {signIn} from "../../store/Actions/AuthActions";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    state = {
        email: "",
        password: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);

    }

    render() {
        const {auth} = this.props;
        if (auth.uid) {
            return <Redirect to="/"/>
        }
        return (
            <section className="max-container">
                <div className="outer">
                    <div className="login-form">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className="text-center">Login</h2>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="text" className="form-control" name="email" onChange={this.handleChange} placeholder="Email"
                                           required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <input type="password" className="form-control" name="password" onChange={this.handleChange} placeholder="Password"
                                           required="required"/>
                                </div>
                            </div>
                            <br/>
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary login-btn btn-block">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
