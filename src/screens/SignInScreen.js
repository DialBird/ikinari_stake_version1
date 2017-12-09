import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { Errors } from '../components';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class SignInScreen extends React.Component {
  onPushSignIn() {
    const { email, password, navigation } = this.props;
    this.props.loginUser({ email, password, navigation });
  }

  render() {
    const {
      email, password, signinErrors, emailChanged, passwordChanged
    } = this.props;

    return (
      <View style={styles.container}>
        <Card>
          <FormLabel>Email</FormLabel>
          <FormInput
            placeholder='Email'
            value={email}
            onChangeText={emailChanged}
          />

          <FormLabel>Password</FormLabel>
          <FormInput
            secureTextEntry
            placeholder='Password'
            value={password}
            onChangeText={passwordChanged}
          />

          <Errors errors={signinErrors}/>

          <Button
            buttonStyle={{marginTop: 20}}
            backgroundColor='#03A9F4'
            title='SIGN IN'
            onPress={this.onPushSignIn.bind(this)}
          />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

const mapStateToProps = ({auth}) => {
  const { email, password, signinErrors, loading } = auth;
  return { email, password, signinErrors, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(SignInScreen);
