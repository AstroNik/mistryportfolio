import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RootReducer from './store/Reducer/RootReducer';
import { applyMiddleware, compose, createStore } from "redux";
import { getFirebase, isLoaded, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import thunk from "redux-thunk";
import { Provider, useSelector } from "react-redux";
import fire from './fire';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(RootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase }))
));

const rrfProps = {
  firebase,
  config: fire,
  dispatch: store.dispatch,
}

function AuthIsLoaded({children}) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) {
      return <div>Loading Screen...</div>;
  }
  return children
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,

  document.getElementById('root')
);
