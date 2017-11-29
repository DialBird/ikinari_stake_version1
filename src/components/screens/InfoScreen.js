import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { INFOS_URL } from '../../apiUrls';

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

  renderRow(info) {
    return (
      <TouchableOpacity style={styles.row}>
        <Text style={styles.rowText}>{info.issue}</Text>
        <Text style={styles.rowText}>{info.title}</Text>
      </TouchableOpacity>
    );
  }

  renderSeparator(sectionId, rowId) {
    return <View key={rowId} style={styles.separator} />;
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});
    return (
      <View>
        <ListView
          enableEmptySections
          dataSource={ds.cloneWithRows(this.state.data)}
          renderRow={this.renderRow}
          renderSeparator={this.renderSeparator}
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
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  }
});

export default InfoScreen;
