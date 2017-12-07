import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
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
      <ScrollView style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize: 16}}>{issue}</Text>
          <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>{title}</Text>
        </View>
        <View>
          <Text style={styles.contentText}>{this.state.content}</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20
  },
  title: {
    paddingBottom: 20
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24
  }
});

export default InfoDetailScreen;
