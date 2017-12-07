import React from 'react';
import { Alert, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { onSignOut } from '../auth';

class OthersScreen extends React.Component {
  onPress() {
    Alert.alert(
      'サインアウト',
      'よろしいですか？',
      [
        {
          text: 'はい',
          onPress: () => {
            onSignOut()
              .then(()=>this.props.navigation.navigate('SignedOut'))
              .catch(err => alert('ログアウトに失敗しました: ' + err));
          }
        },
        {text: 'いいえ', style: 'cancel'}
      ],
      { cancelable: false }
    );
  }

  render() {
    const list = [
      { title: 'ログアウト', icon: 'do-not-disturb', color: '#f00' }
    ];
    return (
      <View>
        <List>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon, color: item.color}}
                onPress={this.onPress.bind(this)}
              />
            ))
          }
        </List>
      </View>
    );
  }
}
export default OthersScreen;
