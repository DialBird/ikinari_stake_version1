import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';
import { ButtonGroup } from 'react-native-elements';
import { USERS_URL } from '../urls';
import { Separator } from '../components';

const ButtonGroupItem = ({ iconName, title }) => (
  <View style={{alignItems: 'center'}}>
    <Icon
      name={iconName}
      size={50}
    />
    <Text style={{textAlign: 'center'}}>{title}</Text>
  </View>
);

class RankScreen extends React.Component {
  constructor(props) {
    super(props);
    this.user = props.navigation.state.params.user;
    this.state = { selectedIndex: 0, data: [], refreshing: false };
  }

  componentWillMount() {
    this.getUserData(this.state.selectedIndex);
  }

  getUserData(selectedIndex) {
    let url = '';
    switch (selectedIndex) {
      case 0:
        url = USERS_URL;
        break;
      case 1:
        url = USERS_URL + '/name';
        break;
      case 2:
        url = USERS_URL + '/point';
        break;
      default:
        return;
    }
    axios.get(url)
      .then(res => {
        this.setState({data: res.data, refreshing: false});
      })
      .catch(err => {
        this.setState({data: [], refreshing: false});
        alert('Error occured: ' + err.response.data);
      });
  }

  updateIndex(selectedIndex) {
    this.setState({selectedIndex});
    this.getUserData(selectedIndex);
  }

  renderItem({ item, index }) {
    const { name, point } = item;
    return (
      <View style={styles.listViewRow}>
        <Text style={{flex: 1}}>第{parseInt(index) + 1}位</Text>
        <Text style={{flex: 2}}>{name}</Text>
        <Text style={{flex: 1}}>{point}</Text>
      </View>
    );
  }

  renderSeparator(_, rowId) {
    return <Separator rowId={rowId}/>;
  }

  renderHeader() {
    const Component1 = () => (
      <ButtonGroupItem iconName='crown' title='総合'/>
    );
    const Component2 = () => (
      <ButtonGroupItem iconName='account' title='名前順'/>
    );
    const Component3 = () => (
      <ButtonGroupItem iconName='crown' title='マイレージ順'/>
    );
    const buttons = [
      { element: Component1 },
      { element: Component2 },
      { element: Component3 }
    ];
    return (
      <View>
        <View style={{paddingVertical: 5}}>
          <ButtonGroup
            selectedIndex={this.state.selectedIndex}
            onPress={this.updateIndex.bind(this)}
            buttons={buttons}
            containerStyle={styles.buttonGroup}
          />
        </View>
        <View style={styles.listHeader}>
          <Text style={{flex: 1, color: '#fff'}}>順位</Text>
          <Text style={{flex: 2, color: '#fff'}}>名前</Text>
          <Text style={{flex: 1, color: '#fff'}}>マイレージ</Text>
        </View>
      </View>
    );
  }

  onRefresh() {
    this.setState({refreshing: true}, ()=>{
      this.getUserData(this.state.selectedIndex);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
            ListHeaderComponent={this.renderHeader.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonGroup: {
    height: 100,
    marginVertical: 30
  },
  listHeader: {
    paddingHorizontal: 20,
    backgroundColor: '#333',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  listViewRow: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default RankScreen;
