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
import PropTypes from 'prop-types';

class SmallNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.auth.uid !== this.props.auth.uid) {
            this.setState({
                isOpen: false
            })
        }
    }

    render() {
        const {auth, history} = this.props
        return (
            <div className="nav-fix" ref={this.setWrapperRef}>
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
                            onClick={() => {
                                history.push('/login');
                                this.setState({isOpen: false})
                            }}
                            className="icon-sizing"
                        />
                        :
                        <ChildButton
                            icon={<> <ExitToAppIcon style={{fontSize: 20}} /> Logout </>}
                            background="#fff"
                            size={40}
                            onClick={() => {
                                this.props.signOut()
                                this.setState({isOpen: false})
                            }}
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
                            onClick={() => {
                                history.push('/addProject')
                                this.setState({isOpen: false})
                            }}
                            className="icon-sizing"
                        />
                    }
                </FloatingMenu>
            </div>
        )
    }
}

SmallNav.propTypes = {
    children: PropTypes.element.isRequired,
};


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
