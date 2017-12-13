import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Barcode from 'react-native-barcode-builder';

class MypageScreen extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.navigation.state.params.user;
  }

  splitCode() {
    let codeArr = [];
    for (let i=0;i<16;i+=4) {
      codeArr.push(this.user.code.slice(i, i+4));
    }
    return codeArr.join(' ');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Image
            style={styles.image}
            source={require('../images/cat_with_bird.jpg')}
            resizeMode={'cover'}
          />
        </View>
        <Barcode
          value={this.splitCode(this.splitCode)}
          format="CODE128"
          height={50}
          width={1.5}
        />
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.title}>現在のあなたの鳥マイレージは</Text>
          <Text style={styles.text}>
            <Text style={styles.point}>{this.user.point}</Text>
            ポイントです
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingVertical: 10
  },
  text: {
    fontSize: 16
  },
  point: {
    color: '#f00',
    fontWeight: 'bold',
    fontSize: 30
  }
});

export default MypageScreen;
