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
import { List } from 'react-native-elements';

class InfoScreen extends React.Component {
  constructor() {
    super();
    this.state = { data: [], refreshing: false };
  }

  getInfoData() {
    axios.get(INFOS_URL)
      .then((res)=>this.setState({ data: res.data, refreshing: false }))
      .catch((e)=>{
        this.setState({ data: [], refreshing: false });
        alert(`axios get error: ${e.message}`);
      });
  }

  componentWillMount() {
    this.getInfoData();
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

  onRefresh() {
    this.setState({refreshing: true}, () => {
      this.getInfoData();
    });
  }

  render() {
    return (
      <View>
        <List>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={this.renderItem.bind(this)}
            ItemSeparatorComponent={this.renderSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        </List>
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
