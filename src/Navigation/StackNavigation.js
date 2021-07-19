import React from 'react';
import HomeScreen from '../Screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import DashboardScreen from '../Screens/DashboardScreen';
import NewOrderScreen from '../Screens/NewOrderScreen';
import MenuSelectScreen from '../Screens/MenuSelectScreen';
import FeatureSelectScreen from '../Screens/FeatureSelectScreen';
import PreMadeMenuScreen from '../Screens/PreMadeMenuScreen';
import CustomMenuScreen from '../Screens/CustomMenuScreen';
import CustomMenuCreationScreen from '../Screens/CustomMenuCreationScreen';
import ItemDetailsScreen from '../Screens/ItemDetailsScreen';
import CartScreen from '../Screens/CartScreen';

const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="NewOrder" component={NewOrderScreen} />
      <Stack.Screen name="MenuSelect" component={MenuSelectScreen} />
      <Stack.Screen
        name="FeatureSelectCustom"
        component={FeatureSelectScreen}
      />
      <Stack.Screen
        name="FeatureSelectPreMade"
        component={FeatureSelectScreen}
      />
      <Stack.Screen name="PreMadeMenu" component={PreMadeMenuScreen} />
      <Stack.Screen name="CustomMenu" component={CustomMenuScreen} />
      <Stack.Screen
        name="CustomMenuCreation"
        component={CustomMenuCreationScreen}
      />
      <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
