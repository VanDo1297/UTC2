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
    <Drawer.Navigator initialRouteName="Trang chủ">
      <Drawer.Screen name="Trang chủ" component={Home} />
      <Drawer.Screen name="Tra lịch thi" component={TestSchedule} />
      <Drawer.Screen name="Tin tức" component={Home} />
      <Drawer.Screen name="Thông báo" component={Home} />
      <Drawer.Screen name="Thư viện" component={Home} />
      <Drawer.Screen name="Tuyển sinh" component={Home} />
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
