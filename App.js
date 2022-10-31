import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import Favorite from './screens/Favorite';
import Main from './screens/Main';
import {COLORS} from './constants/const';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer
      onReady={() => {
        LottieSplashScreen.hide();
      }}>
      <Drawer.Navigator
        initialRouteName="Main"
        screenOptions={{
          overlayColor: 'transparent',
          headerStyle: {
            backgroundColor: COLORS.main,
          },
          headerTintColor: COLORS.white,
          drawerActiveBackgroundColor: COLORS.activeBg,
          drawerItemStyle: {
            width: '100%',
            marginLeft: 0,
            marginBottom: 0,
            marginTop: 0,
            borderRadius: 0,
          },
          drawerLabelStyle: {
            color: COLORS.white,
            paddingLeft: 20,
            fontSize: 18,
          },
          drawerStyle: {
            paddingTop: 25,
            backgroundColor: COLORS.main,
            shadowColor: COLORS.black,
            elevation: 24,
          },
        }}>
        <Drawer.Screen name="Main" component={Main} />
        <Drawer.Screen name="Favorites" component={Favorite} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
