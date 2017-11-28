import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignUp, storeToken } from '../../auth';

class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      nickname: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: [],
      showProgress: false
    };
  }

  onPushSignUp() {
    const { name, nickname, email, password, password_confirmation } = this.state;
    const user_params = {
      user: { name, nickname, email, password, password_confirmation }
    };
    const { navigate } = this.props.navigation;

    this.setState({showProgress: true});

    onSignUp(user_params)
      .then(res => {
        let accessToken = res.data;
        storeToken(accessToken)
          .then(() => navigate('SignedIn'))
          .catch((err) => alert('setItem error: ' + err));
      })
      .catch(errors => {
        const formErrors = errors.response.data;
        let errorsArray = [];
        for(var key in formErrors) {
          if(formErrors[key].length > 1) {
            formErrors[key].map(error => errorsArray.push(`${key} ${error}`));
          } else {
            errorsArray.push(`${key} ${formErrors[key]}`);
          }
        }
        console.log(errorsArray);
        this.setState({errors: errorsArray});
        this.setState({showProgress: false});
      });
  }

  render() {
    const { navigate } = this.props.navigation;
    const { name, nickname, email, password, password_confirmation } = this.state;
    return (
      <ScrollView>
        <Card>
          <FormLabel>Name</FormLabel>
          <FormInput
            placeholder='Name...'
            value={name}
            onChangeText={(name)=>this.setState({name})}
          />
          <FormLabel>NickName</FormLabel>
          <FormInput
            placeholder='NickName...'
            value={nickname}
            onChangeText={(nickname)=>this.setState({nickname})}
          />
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
          <FormLabel>Confirm Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder='Confirm Password...'
            value={password_confirmation}
            onChangeText={(password_confirmation)=>this.setState({password_confirmation})}
          />
          <Errors errors={this.state.errors}/>

          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor='#03A9F4'
            title='SIGN UP'
            onPress={this.onPushSignUp.bind(this)}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor='transparent'
            textStyle={{ color: '#bcbec1' }}
            title='Sign In'
            onPress={() => navigate('SignIn')}
          />
        </Card>
      </ScrollView>
    );
  }
}

const Errors = (props) => {
  return (
    <View>
      {props.errors.map((error, i) => <Text key={i} style={styles.error}> {error} </Text>)}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    paddingTop: 10
  }
});


export default SignUpScreen;
