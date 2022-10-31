import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {AppRegistry, StatusBar, Alert} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {store} from './store/store';
import NetInfo from '@react-native-community/netinfo';
import {COLORS} from './constants/const';
import {getFavorites} from './store/action-creator';

//a request to get a list of favorites from the server when the application starts
store.dispatch(getFavorites());

//listen to the event NetInfo.addEventListener  Internet connection successful
//and issue an error if state.isConnected === false  for all application
const AppWrap = () => {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected === false) {
        Alert.alert(
          'Internet connection error!',
          'Pls check Internet connection and retry!',
          [{text: 'OK', onPress: () => {}}],
        );
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={COLORS.main} />

      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => AppWrap);
