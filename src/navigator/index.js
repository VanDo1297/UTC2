import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../containers/splash';
import Home from '../containers/home';
import TestSchedule from '../containers/testSchedule';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerComponents() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="TestSchedule" component={TestSchedule} />
    </Drawer.Navigator>
  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={DrawerComponents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
