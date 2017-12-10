import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements';
import commonStyles from '../styles';
import { initializeInfo, searchTextChanged } from '../actions';

class InfoScreen extends React.Component {
  componentWillMount() {
    this.props.initializeInfo();
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
    return <View key={rowId} style={commonStyles.separator} />;
  }

  // FIXME: Headerをレンダーしようとするとエラーが出る
  // Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).
  renderHeader() {
    return (
      <SearchBar
        placeholder='Type here...'
        onChangeText={this.props.searchTextChanged}
        value={this.props.searchText}
        autoFocus={true}
        lightTheme round
      />
    );
  }

  onRefresh() {
    this.props.initializeInfo();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.filterd_info}
          keyExtractor={item => item.id}
          renderItem={this.renderItem.bind(this)}
          ItemSeparatorComponent={this.renderSeparator}
          refreshing={this.props.loading}
          onRefresh={this.onRefresh.bind(this)}
        />
        {/* ListHeaderComponent={this.renderHeader.bind(this)} */}
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

const mapStateToProps = ({info}) => {
  const { initial_info, filterd_info, loading, searchText } = info;
  return { initial_info, filterd_info, loading, searchText };
};

export default connect(mapStateToProps, { initializeInfo, searchTextChanged })(InfoScreen);
