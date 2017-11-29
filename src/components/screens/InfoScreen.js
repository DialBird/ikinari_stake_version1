import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { INFOS_URL } from '../../apiUrls';
import sharedStyles from '../../sharedStyles';

class InfoScreen extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentWillMount() {
    axios.get(INFOS_URL)
      .then((res)=>this.setState({ data: res.data }))
      .catch((e)=>alert(`axios get error: ${e.message}`));
  }

  renderItem({item}) {
    const { issue, title } = item;
    return (
      <TouchableOpacity style={styles.row}>
        <View>
          <Text style={styles.rowText}>{issue}</Text>
          <Text style={styles.rowText}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderSeparator(sectionId, rowId) {
    return <View key={rowId} style={sharedStyles.separator} />;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: '#fff',
    height: 100
  },
  rowText: {
    fontSize: 16,
    padding: 10
  }
});

export default InfoScreen;
