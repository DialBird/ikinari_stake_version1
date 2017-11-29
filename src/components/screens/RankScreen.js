import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default () => {
  return (
    <View>
    </View>
  );
};
// import axios from 'axios';
// import { Spinner } from '../common';
// import { ButtonGroup } from 'react-native-elements';
//   constructor() {
//     super();
//     this.state = { selectedIndex: 0, loading: false, num: 0, data: [] };
//   }
//   updateIndex(selectedIndex) {
//     this.setState({selectedIndex, loading: true});
//     setTimeout(() => { this.setState({loading: false}); }, 1000);
//   }
//   renderSpinner() {
//     if (this.state.loading) {
//       return <Spinner size='large' />;
//     }
//   }
//   renderRow(user) {
//     const { name, title } = user;
//     return <Text>{name}{title}</Text>;
//   }
//   renderContent() {
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1!==r2});
//     switch (this.state.selectedIndex) {
//       case 0:
//         axios.get('http://lala.work/api/v1/users')
//           .then(res => this.setState({data: res.data}))
//           .catch(err => console.log('Error occured: ' + err.response.data));
//         break;
//       case 1:
//         axios.get('http://lala.work/api/v1/dogs')
//           .then(res => this.setState({data: res.data}))
//           .catch(err => console.log('Error occured: ' + err.response.data));
//         break;
//       case 2:
//         axios.get('http://lala.work/api/v1/info_articles')
//           .then(res => this.setState({data: res.data}))
//           .catch(err => console.log('Error occured: ' + err.response.data));
//         break;
//       default:
//         return;
//     }
//     return (
//       <ListView
//         removeClippedSubviews={false}
//         enableEmptySections
//         dataSource={ds.cloneWithRows(this.state.data)}
//         renderRow={this.renderRow}
//       />
//     );
//   }
//
//     const buttons = ['foo', 'bar', 'pee'];
//         {#<{(| <ButtonGroup |)}>#}
//         {#<{(|   selectedIndex={this.state.selectedIndex} |)}>#}
//         {#<{(|   onPress={this.updateIndex.bind(this)} |)}>#}
//         {#<{(|   buttons={buttons} |)}>#}
//         {#<{(|   containerStyle={{height: 30}} |)}>#}
//         {#<{(| /> |)}>#}
//         {#<{(| <Text style={styles.welcome}> |)}>#}
//         {#<{(|   Welcome to React Native! |)}>#}
//         {#<{(| </Text> |)}>#}
//         {#<{(| <Text style={styles.instructions}> |)}>#}
//         {#<{(|   To get started, edit App.js |)}>#}
//         {#<{(| </Text> |)}>#}
//         {#<{(| <Text style={styles.instructions}> |)}>#}
//         {#<{(|   {instructions} |)}>#}
//         {#<{(| </Text> |)}>#}
//         {#<{(| {this.renderContent()} |)}>#}
//         {#<{(| {this.renderSpinner()} |)}>#}
