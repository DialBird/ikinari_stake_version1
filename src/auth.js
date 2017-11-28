import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const USER_KEY = 'auth-demo-key';

export const onSignIn = (user) => {
  return axios.post('http://lala.work/api/v1/login', user);
};

export const onSignUp = (user) => {
  return axios.post('http://lala.work/api/v1/users', user);
};

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const storeToken = (accessToken) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(USER_KEY, accessToken)
      .then(() => resolve())
      .catch((err) => reject(err));
  });
};

export const getProfile = (accessToken) => {
  return axios.get(`http://lala.work/api/v1/users/${accessToken}`);
};

export const getToken = () => {
  return AsyncStorage.getItem(USER_KEY);
};

export const isSignedIn = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(USER_KEY)
      .then(res => {
        if (res !== null) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};
