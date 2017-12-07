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
  ShopListScreen,
  CouponScreen,
  ShoppingScreen,
  SnsScreen,
  OthersScreen
} from './screens';
import {
  INFO, INFO_DETAIL, RANK, MYPAGE, MENU, SHOPLIST, COUPON, SHOPPING, SNS, OTHERS
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
  ShopList: {
    screen: ShopListScreen,
    navigationOptions: {
      gesturesEnabled: false,
      title: SHOPLIST
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
