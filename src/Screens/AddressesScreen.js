import React, {Component} from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import {PRIMARY, SECONDARY, THIRD, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Button from '../Components/Button';
import Navigate from '../Navigation/Navigate';
import Svg, {G, Path} from 'react-native-svg';

function SavedAddresses() {
  return (
    <TouchableOpacity
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

export default class EditProfileScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    const {NavigateTo} = Navigate();
    return (
      <View
        style={{
          backgroundColor: WHITE,
          height: Height,
          width: Width,
        }}>
        <Header
          light={false}
          placeholder="Adresses"
          backPath="Profile"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1}}>
          <Text
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              paddingHorizontal: 20,
              marginVertical: 10,
            }}>
            Delivery Address
          </Text>
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
          <SavedAddresses />
        </ScrollView>
      </View>
    );
  }
}
