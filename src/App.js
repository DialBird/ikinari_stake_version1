/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createRootNavigator } from './Router';
import { isSignedIn } from './auth';
import Reducers from './reducers';

console.diableYellowBox = true;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { signedIn: false, checkedSignIn: false };
  }

  componentWillMount() {
    isSignedIn()
      .then(res => {
        this.setState({ signedIn: res, checkedSignIn: true});
      })
      .catch(err => console.log('An error occurrd: ' + err));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) return null;

    const store = createStore(Reducers, {}, applyMiddleware(ReduxThunk));
    const Router = createRootNavigator(signedIn);
    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}
