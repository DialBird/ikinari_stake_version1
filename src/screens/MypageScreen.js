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

  separatedCode() {
    return this.user.code.split(/(....)/).filter(Boolean).join(' ');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../images/card.png')}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.barcodeContainer}>
          <Barcode
            value={this.separatedCode()}
            format="CODE128"
            height={50}
            width={1.5}
          />
          <Text style={{fontSize:20, fontWeight: 'bold'}}>{this.separatedCode()}</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.text}>現在のあなたの鳥マイレージは</Text>
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
  imageContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 256,
    height: 256
  },
  barcodeContainer: {
    flex: 1,
    alignItems: 'center'
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
