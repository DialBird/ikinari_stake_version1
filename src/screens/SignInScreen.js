import React from 'react';
import { View, Text } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn, storeToken } from '../auth';
import commonStyles from '../styles.js';

export default class SignInScreen extends React.Component {
  constructor() {
    super();
    this.state = { email: '', password: '', error: '' };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { email, password } = this.state;
    return (
      <View style={{ paddingVertical: 20 }}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder='Email address...'
            value={email}
            onChangeText={(email)=>this.setState({email})}
          />
          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder='Password...'
            value={password}
            onChangeText={(password)=>this.setState({password})}
          />
          <Text style={commonStyles.errText}>{this.state.error}</Text>

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor='#03A9F4'
            title='SIGN IN'
            onPress={() => {
              onSignIn({session: { email, password }})
                .then((res) => {
                  const accessToken = res.data;
                  console.log('accessToken is : ' + accessToken);
                  storeToken(accessToken)
                    .then(() => navigate('SignedIn'))
                    .catch((err) => alert('setItem error: ' + err));
                })
                .catch((err) => {
                  console.log('loginerr: ' + err);
                  this.setState({error: err.response.data});
                });
            }}
          />
        </Card>
      </View>
    );
  }
}
