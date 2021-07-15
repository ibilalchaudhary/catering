import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {PRIMARY, TEXT_COLOR, WHITE} from '../Constants/Colors';

export default function InputBox({placeholder, variant, secureTextEntry}) {
  const [focuse, setFocuse] = useState(false);
  if (variant === 'light') {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 45,
          borderRadius: 5,
          backgroundColor: WHITE,
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={TEXT_COLOR}
          secureTextEntry={secureTextEntry}
          onPressIn={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  } else if (variant === 'primary') {
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          height: 45,
          borderRadius: 5,
          backgroundColor: 'rgba(255,255,255,.9)',
          paddingHorizontal: 15,
          borderWidth: focuse ? 1 : 0,
          borderColor: PRIMARY,
          marginVertical: 8,
        }}
        onFocus={() => {
          setFocuse(true);
        }}
        onBlur={() => {
          setFocuse(false);
        }}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={TEXT_COLOR}
          secureTextEntry={secureTextEntry}
          onFocus={() => {
            setFocuse(true);
          }}
          onBlur={() => {
            setFocuse(false);
          }}
        />
      </TouchableOpacity>
    );
  }
}
