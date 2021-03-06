import { StackNavigator } from 'react-navigation';
import {
  HomeScreen,
  SignInScreen,
  SignUpScreen,
  InfoScreen,
  InfoDetailScreen,
  RankScreen,
  MypageScreen,
  MenuScreen,
  BirdSpotScreen,
  BirdSpotDetailScreen,
  CouponScreen,
  ShoppingScreen,
  SnsScreen,
  OthersScreen
} from './screens';
import {
  INFO, INFO_DETAIL, RANK, MYPAGE, MENU, BIRD_SPOT, COUPON, SHOPPING, SNS, OTHERS
} from './titles';

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
      gesturesEnabled: false,
      header: null
    }
  },
  Info: {
    screen: InfoScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: INFO
    }
  },
  InfoDetail: {
    screen: InfoDetailScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: INFO_DETAIL
    }
  },
  Rank: {
    screen: RankScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: RANK
    }
  },
  Mypage: {
    screen: MypageScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: MYPAGE
    }
  },
  Menu: {
    screen: MenuScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: MENU
    }
  },
  BirdSpot: {
    screen: BirdSpotScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: BIRD_SPOT
    }
  },
  BirdSpotDetail: {
    screen: BirdSpotDetailScreen,
    navigationOptions: {
      gesturesEnabled: false
    }
  },
  Coupon: {
    screen: CouponScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: COUPON
    }
  },
  Shopping: {
    screen: ShoppingScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: SHOPPING
    }
  },
  Sns: {
    screen: SnsScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: SNS
    }
  },
  Others: {
    screen: OthersScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: OTHERS
    }
  }
}, {
  mode: 'modal',
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
    initialRouteName: signedIn ? 'SignedIn' : 'SignedOut'
  });
};
