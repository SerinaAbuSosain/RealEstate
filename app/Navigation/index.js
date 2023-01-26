import React, {useEffect, useState} from 'react';
//import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomePage from '../Screens/Home/HomePage';
import SplashScreen from '../Screens/Home/SplashScreen';
import {useSelector} from 'react-redux';
import {Text, StyleSheet, Dimensions, View, Keyboard} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Houses from '../Screens/Home/Houses';
import Map from '../Component/Map';
import ShowImage from '../Component/ShowImage';
//import FullScreenPanorama from '../Component/VirtualTour';
//const {X, Y} = useSelector(state => state);
import Menu from '../Component/Menu';
import Budget from '../Screens/Home/Budget';
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomePage">
      <Stack.Screen name="HomePage" component={HomePage} />
    </Stack.Navigator>
  );
};
const Budgetstack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Budget">
      <Stack.Screen name="Budget" component={Budget} />
    </Stack.Navigator>
  );
};
const NotStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}></Stack.Navigator>
  );
};

const BottomNavigation = () => {
  const {X, Y} = useSelector(state => state);

  const tabs = [
    {name: 'Home', component: HomeStack, icon: 'home'},
    {name: 'Budget', component: Budgetstack, icon: 'linechart'},
    {name: 'profile', component: NotStack, icon: 'user'},
  ];

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        keyboardHidesTabBar: true,
        headerShown: false,
        ...screenOptions,
      }}>
      {tabs.map((item, index) => (
        <Tab.Screen
          name={item.name}
          key={index}
          component={item.component}
          options={{
            headerShown: false,
            tabBarIcon: tabInfo => {
              return (
                <AntDesign
                  name={item.icon}
                  size={20}
                  color={tabInfo.focused ? '#515c5d' : '#8e8e93'}
                />
              );
            },
            tabBarLabel: props => (
              <Text
                style={{
                  marginBottom: 5,
                  color: props.focused ? '#515c5d' : '#8e8e93',
                  fontSize: X / 27,
                  fontWeight: '700',
                }}>
                {item.name}
              </Text>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          width: 240,
          height: '100%',
        },
      }}
      options={{headerShown: false}}
      initialRouteName="BottomNavigation"
      drawerContent={props => <Menu {...props} />}>
      <Drawer.Screen
        name="BottomNavigation"
        options={{headerShown: false}}
        component={BottomNavigation}
      />
    </Drawer.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="MyDrawer"
          options={{headerShown: false}}
          component={MyDrawer}
        />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Houses" component={Houses} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="ShowImage" component={ShowImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const screenOptions = {
  tabBarStyle: {
    height: 60,
  },
  tabBarItemStyle: {
    // margin:5,
    borderRadius: 10,
    // top:-15,
  },
};
export default AppNavigator;
