import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  INFO, RANK, MYPAGE, MENU, SHOPLIST, COUPON, SHOPPING, SNS, OTHERS
} from '../titles';
import { getToken, getProfile } from '../auth';

const MyStatus = ({ user }) => {
  if (!user) user = { name: '', point: 0 };
  const { name, point } = user;
  return (
    <View style={styles.myStatusContainer}>
      <Text>{name} さんの現在のポイント</Text>
      <Text style={{fontSize:24}}>{point}</Text>
    </View>
  );
};

const BlockButton = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.blockButton} onPress={onPress}>
    <Icon name={icon} size={30} />
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = { user: {} };
  }

  componentWillMount() {
    getToken()
      .then(getProfile)
      .then(res => {
        this.setState({user: res.data});
      })
      .catch(err => alert('情報を取得できませんでした: ' + err));
  }

  render() {
    const { navigate } = this.props.navigation;
    const { user } = this.state;
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Image
            style={styles.image}
            source={require('../images/hiyo.jpg')}
            resizeMode={'cover'}
          />
        </View>
        <View>
          <MyStatus user={user}/>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.buttonWrapper}>
            <BlockButton
              title={INFO}
              icon='ios-information-circle'
              onPress={()=>navigate('Info')}
            />
            <BlockButton
              title={RANK}
              icon='ios-star'
              onPress={()=>navigate('Rank', {user})}
            />
            <BlockButton
              title={MYPAGE}
              icon='ios-plane'
              onPress={()=>navigate('Mypage', {user})}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <BlockButton
              title={MENU}
              icon='ios-book'
              onPress={()=>navigate('Menu')}
            />
            <BlockButton
              title={SHOPLIST}
              icon='ios-home'
              onPress={()=>navigate('ShopList')}
            />
            <BlockButton
              title={COUPON}
              icon='ios-card'
              onPress={()=>navigate('Coupon')}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <BlockButton
              title={SHOPPING}
              icon='ios-cart'
              onPress={()=>navigate('Shopping')}
            />
            <BlockButton
              title={SNS}
              icon='logo-facebook'
              onPress={()=>navigate('Sns')}
            />
            <BlockButton
              title={OTHERS}
              icon='ios-more'
              onPress={()=>navigate('Others')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonWrapper: {
    flexDirection: 'row',
    flex: 1,
    height: 30
  },
  blockButton: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    flex: 1,
    width: width,
    zIndex: 999
  },
  myStatusContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: '#d771ff'
  }
});
