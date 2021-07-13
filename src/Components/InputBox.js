import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';

export default function InputBox({placeholder, variant}) {
  const [focuse, setFocuse] = useState(false);
  if (variant === 'light') {
    return (
      <View
        style={{
          width: '100%',
          height: 45,
          borderRadius: 5,
          backgroundColor: WHITE,
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={TEXT_COLOR}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </View>
    );
  } else if (variant === 'primary') {
    return (
      <View
        style={{
          width: '100%',
          height: 45,
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255,.2)',
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={WHITE}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </View>
    );
  }
}
