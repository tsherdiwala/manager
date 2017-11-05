import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

export default class App extends Component {

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBQhJDmq0DjcBD5YegvKgXPxu55FoNj1wk',
      authDomain: 'react-auth-knoxpo.firebaseapp.com',
      databaseURL: 'https://react-auth-knoxpo.firebaseio.com',
      projectId: 'react-auth-knoxpo',
      storageBucket: 'react-auth-knoxpo.appspot.com',
      messagingSenderId: '62073367792'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <LoginForm />
      </Provider>
    );
  }
}
