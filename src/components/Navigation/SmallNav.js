import React from 'react';
import {connect} from 'react-redux'
import {signOut} from "../../store/Actions/AuthActions";
import {ChildButton, Directions, FloatingMenu, MainButton} from "react-floating-button-menu";
import SettingsIcon from "@material-ui/icons/Settings";
import CloseIcon from "@material-ui/icons/Close";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {withRouter} from "react-router-dom";

class SmallNav extends React.Component {
    state = {
        isOpen: false
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.auth.uid !== this.props.auth.uid) {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }

    render() {
        const {auth, history} = this.props
        return (
            <div className="nav-fix">
                <FloatingMenu
                    slideSpeed={500}
                    direction={Directions.Up}
                    spacing={8}
                    isOpen={this.state.isOpen}
                >
                    <MainButton
                        iconResting={<SettingsIcon style={{fontSize: 20}} className="icon-color"/>}
                        iconActive={<CloseIcon style={{fontSize: 20}} className="icon-color"/>}
                        background="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                        onClick={() => this.setState({isOpen: !this.state.isOpen})}
                        size={56}
                    />
                    {!auth.uid ?
                        <ChildButton
                            icon={<> <PersonIcon style={{fontSize: 20}}/> Login </>}
                            background="#fff"
                            size={40}
                            onClick={() => history.push('/login')}
                            className="icon-sizing"
                        />
                        :
                        <ChildButton
                            icon={<> <ExitToAppIcon style={{fontSize: 20}} /> Logout </>}
                            background="#fff"
                            size={40}
                            onClick={() => this.props.signOut()}
                            className="icon-sizing"
                        />
                    }
                    {!auth.uid ?
                        <></>
                        :
                        <ChildButton
                            icon={<> <AddIcon style={{fontSize: 20}}/> Project</>}
                            background="#fff"
                            size={40}
                            onClick={() => history.push('/addProject')}
                            className="icon-sizing"
                        />
                    }
                </FloatingMenu>
            </div>
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
        signOut: () => dispatch(signOut())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SmallNav))
