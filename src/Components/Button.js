import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {PRIMARY, WHITE} from '../Constants/Colors';

export default function Button({placeholder, onPress, veriant}) {
  if (veriant === 'primary') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 50,
          backgroundColor: PRIMARY,
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
        }}
        onPress={onPress}>
        <Text style={{color: WHITE, fontSize: 16}}>{placeholder}</Text>
      </TouchableOpacity>
    );
  } else if (veriant === 'secondary') {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 45,
          backgroundColor: '#7D7D7D',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 8,
        }}
        onPress={onPress}>
        <Text style={{color: WHITE, fontSize: 16}}>{placeholder}</Text>
      </TouchableOpacity>
    );
  }
}
