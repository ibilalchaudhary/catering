import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Height} from '../Constants/Constants';

export default class DashboardScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../Assets/dashboard_background.png')}
        style={{height: Height, flex: 1}}>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View
            style={{
              paddingVertical: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../Assets/userPic.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
            <Image
              source={require('../Assets/logo.png')}
              style={{width: 110, height: 50}}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
