import React, {Component} from 'react';
import {Image, ImageBackground, Text} from 'react-native';
import Heading from '../Components/Heading';
import InputBox from '../Components/InputBox';
import Logo from '../Components/Logo';
import {Height} from '../Constants/Constants';

export default class LoginScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../Assets/login_background.png')}
        style={{height: Height, flex: 1, paddingHorizontal: 20}}>
        <Logo light={false} />
        <Heading lignt={false} />
        <InputBox placeholder="Email" variant="light" />
      </ImageBackground>
    );
  }
}
