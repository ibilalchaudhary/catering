import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import StackNavigation from './Navigation/StackNavigation';

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <StackNavigation />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
