import { StackNavigator } from 'react-navigation';
import {
  HomeScreen,
  SignInScreen,
  SignUpScreen
} from './components/screens';

const SignedOut = StackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      title: 'Sign Up'
    }
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      title: 'Sign In'
    }
  }
});

const SignedIn = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'ホーム'
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator({
    SignedIn: {
      screen: SignedIn,
      navigationOptions: {
        gesturesEnabled: false
      }
    },
    SignedOut: {
      screen: SignedOut,
      navigationOptions: {
        gesturesEnabled: false
      }
    }
  }, {
    headerMode: 'none',
    mode: 'modal',
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
  });
};
