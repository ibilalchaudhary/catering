import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import {PRIMARY, WHITE} from '../Constants/Colors';

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
        }}
        onFocus={() => {
          setFocuse(true);
        }}
        onBlur={() => {
          setFocuse(false);
        }}>
        <TextInput placeholder={placeholder} />
      </View>
    );
  }
}
