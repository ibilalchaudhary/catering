import React from 'react';
import {Text} from 'react-native';
import {PRIMARY, WHITE} from '../Constants/Colors';

export default function Heading({lignt}) {
  return (
    <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: lignt ? WHITE : PRIMARY,
        marginBottom: 10,
      }}>
      Welcome Back!
    </Text>
  );
}
