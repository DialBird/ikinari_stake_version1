import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class InfoDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    const { item } = props.navigation.state.params;
    this.state = { ...item };
  }

  render() {
    const { issue, title } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize: 16}}>{issue}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>{title}</Text>
        </View>
        <View>
        </View>
        <Text>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    padding: 20
  }
});

export default InfoDetailScreen;
