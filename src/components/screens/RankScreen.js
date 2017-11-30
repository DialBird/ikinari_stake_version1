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
import sharedStyles from '../../sharedStyles.js';
import { USERS_URL } from '../../apiUrls';

const MyStatus = ({ user }) => {
  const { name, point } = user;
  return (
    <View style={styles.myRow}>
      <Text>{name} さんの現在のポイント</Text>
      <Text style={{fontSize:24}}>{point}</Text>
    </View>
  );
};

const ButtonGroupItem = ({ iconName, title }) => (
  <View>
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
        <Text style={{flex: 1, textAlign: 'center'}}>第{parseInt(index) + 1}位</Text>
        <Text style={{flex: 1, textAlign: 'center'}}>{point}</Text>
        <Text style={{flex: 2}}>{name}</Text>
      </View>
    );
  }

  renderSeparator(sectionId, rowId) {
    return <View key={rowId} style={sharedStyles.separator}/>;
  }

  onRefresh() {
    this.setState({refreshing: true}, ()=>{
      this.getUserData(this.state.selectedIndex);
    });
  }

  render() {
    const component1 = () => (
      <ButtonGroupItem iconName='crown' title='総合'/>
    );
    const component2 = () => (
      <ButtonGroupItem iconName='account' title='名前順'/>
    );
    const component3 = () => (
      <ButtonGroupItem iconName='magnify' title='発見順'/>
    );
    const buttons = [
      { element: component1 },
      { element: component2 },
      { element: component3 }
    ];

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <MyStatus user={this.user}/>
          <ButtonGroup
            selectedIndex={this.state.selectedIndex}
            onPress={this.updateIndex.bind(this)}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
        </View>
        <View style={{flex: 2}}>
          <FlatList
            data={this.state.data}
            keyExtractor={item => item.id}
            renderItem={this.renderItem}
            ItemSeparatorComponent={this.renderSeparator}
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myRow: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10
  },
  listViewRow: {
    backgroundColor: '#fff',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default RankScreen;
