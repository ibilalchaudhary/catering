import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {SECONDARY} from '../Constants/Colors';
import Navigate from '../Navigation/Navigate';

export default function SavedAddresses({navigation, path}) {
  const {NavigateTo} = Navigate();
  return (
    <TouchableOpacity
      onPress={() => {
        NavigateTo(path ? 'Addresses' : 'CheckOut', navigation);
      }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: 18,
        marginHorizontal: 20,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#FF6F00',
        marginVertical: 10,
      }}>
      <Text>Plot # 43 , Phase 5, DHA</Text>
      <Text style={{color: SECONDARY}}>Lahore</Text>
    </TouchableOpacity>
  );
}
