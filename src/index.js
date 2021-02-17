import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RootReducer from './store/Reducer/RootReducer';
import {applyMiddleware, compose, createStore} from "redux";
import {getFirebase, ReactReduxFirebaseProvider} from 'react-redux-firebase';
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import fire from './fire';
import firebase from 'firebase/app';

const store = createStore(RootReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase}))
));

const rrfProps = {
    firebase,
    config: fire,
    dispatch: store.dispatch,
}

ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
            <App/>
        </ReactReduxFirebaseProvider>
    </Provider>,

    document.getElementById('root')
);
