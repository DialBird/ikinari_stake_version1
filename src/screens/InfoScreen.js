import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import { INFOS_URL } from '../urls';
import sharedStyles from '../sharedStyles';
import { SearchBar } from 'react-native-elements';

class InfoScreen extends React.Component {
  constructor() {
    super();
    this.state = { initialData: [], data: [], refreshing: false, searchText: '' };
  }

  getInfoData() {
    axios.get(INFOS_URL)
      .then((res)=>this.setState({ initialData: res.data, data: res.data, refreshing: false }))
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
    const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity style={styles.row} onPress={()=>navigate('InfoDetail', { item })}>
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

  renderHeader() {
    return (
      <SearchBar
        placeholder='Type here...'
        onChangeText={this.filterInfo.bind(this)}
        value={this.state.searchText}
        autoFocus={true}
        lightTheme round
      />
    );
  }

  filterInfo(text) {
    text = text.toLowerCase();
    const filteredResult = this.state.initialData.filter(item => {
      return item.title.toLowerCase().match(text);
    });
    this.setState({data: filteredResult, searchText: text});
  }

  onRefresh() {
    this.setState({refreshing: true}, () => {
      this.getInfoData();
    });
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          keyExtractor={item => item.id}
          renderItem={this.renderItem.bind(this)}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh.bind(this)}
          ListHeaderComponent={this.renderHeader.bind(this)}
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
