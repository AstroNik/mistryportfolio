import { combineReducers } from 'redux';
import {firebaseReducer} from 'react-redux-firebase';
import ProjectReducer from './ProjectReducer';
import AuthReducer from './AuthReducer';

const RootReducer = combineReducers({
    auth: AuthReducer,
    projects: ProjectReducer,
    firebase: firebaseReducer
});

export default RootReducer;