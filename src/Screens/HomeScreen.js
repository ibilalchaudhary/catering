import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';
import {Height} from '../Constants/Constants';
import {PRIMARY, SECONDAY, WHITE} from '../Constants/Colors';
import Svg, {Path} from 'react-native-svg';

export default function HomeScreen() {
  return (
    <ImageBackground
      source={require('../Assets/home_background.png')}
      style={{
        height: Height,
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            width: '75%',
            height: 45,
            backgroundColor: SECONDAY,
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={9.647}
            height={19.293}
            viewBox="0 0 9.647 19.293">
            <Path
              data-name={2111392}
              d="M7.886 3.2h1.761V.136A22.743 22.743 0 007.081 0C4.542 0 2.802 1.6 2.802 4.533v2.7h-2.8v3.429h2.8v8.629h3.436v-8.626h2.689l.427-3.429H6.237V4.873c0-.991.268-1.67 1.649-1.67z"
              fill="#fff"
            />
          </Svg>
          <Text>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
