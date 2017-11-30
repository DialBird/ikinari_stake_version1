import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default ({ navigation }) => {
  const { user } = navigation.state.params;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Image
          style={styles.image}
          source={require('../../images/cat_with_bird.jpg')}
          resizeMode={'cover'}
        />
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text style={styles.title}>現在のあなたの鳥マイレージは</Text>
        <Text style={styles.text}>
          <Text style={styles.point}>{user.point}</Text>
          ポイントです
        </Text>
      </View>
    </View>
  );
};

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
