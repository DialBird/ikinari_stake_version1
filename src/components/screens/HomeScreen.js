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
} from '../../titles';

const BlockButton = ({ icon, title, onPress }) => (
  <TouchableOpacity style={styles.blockButton} onPress={onPress}>
    <Icon name={icon} size={30} />
    <Text>{title}</Text>
  </TouchableOpacity>
);

export default class HomeScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={{flex: 2}}>
          <Image
            style={styles.image}
            source={require('../../images/hiyo.jpg')}
            resizeMode={'cover'}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={styles.buttonWrapper}>
            <BlockButton
              title={INFO}
              icon='ios-information-circle'
              onPress={()=>navigate('Info')}
            />
            <BlockButton title={RANK} icon='ios-star'/>
            <BlockButton title={MYPAGE} icon='ios-plane'/>
          </View>
          <View style={styles.buttonWrapper}>
            <BlockButton title={MENU} icon='ios-book'/>
            <BlockButton title={SHOPLIST} icon='ios-cart'/>
            <BlockButton title={COUPON} icon='ios-card'/>
          </View>
          <View style={styles.buttonWrapper}>
            <BlockButton title={SHOPPING} icon='ios-cart'/>
            <BlockButton title={SNS} icon='logo-facebook'/>
            <BlockButton title={OTHERS} icon='ios-more'/>
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
  }
});
