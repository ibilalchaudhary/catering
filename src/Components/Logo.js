import React from 'react';
import {Image} from 'react-native';

export default function Logo({light}) {
  return (
    <Image
      source={
        light
          ? require('../Assets/logo_light.png')
          : require('../Assets/logo.png')
      }
      style={{
        width: 100,
        height: 100,
        marginVertical: 50,
        alignSelf: 'center',
      }}
    />
  );
}
