/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { createRootNavigator } from './Router';
import { isSignedIn } from './auth';

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

    const Router = createRootNavigator(signedIn);
    return <Router />;
  }
}
