import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  INFO, RANK, MYPAGE, MENU, BIRDSPOT, COUPON, SHOPPING, SNS, OTHERS
} from '../titles';
import { getToken, getProfile } from '../auth';
import { setUser } from '../actions';

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

class HomeScreen extends React.Component {
  componentWillMount() {
    const { navigation, setUser } = this.props;
    getToken()
      .then(getProfile)
      .then(res => setUser(res.data))
      .catch(err => {
        alert('ログイン情報を取得できませんでした: ' + err);
        navigation.navigate('SignedOut');
      });
  }

  render() {
    const { user } = this.props;
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Image
            style={styles.image}
            source={require('../images/birds.gif')}
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
              title={BIRDSPOT}
              icon='ios-search'
              onPress={()=>navigate('BirdSpot')}
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
    marginTop: 20
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

const mapStateToProps = ({home}) => {
  const { user } = home;
  return { user };
};

export default connect(mapStateToProps, { setUser })(HomeScreen);
