import React, {Component} from 'react';
import {Text, ScrollView, View, TouchableOpacity} from 'react-native';
import InputBox from '../Components/InputBox';
import {FORTH, PRIMARY, TEXT_COLOR, THIRD, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Svg, {G, Path} from 'react-native-svg';
import Header from '../Components/Header';
import MenuItem from '../Components/MenuItem';
import CatagoryRow from '../Components/CatagoryRow';

export default class CustomMenuScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: WHITE, height: Height, width: Width}}>
        <Header
          light={false}
          placeholder="Custom Menu"
          backPath="FeatureSelectCustom"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1}}>
          <View
            style={{
              backgroundColor: THIRD,
              marginHorizontal: 20,
              borderRadius: 5,
              padding: 20,
            }}>
            <MenuItem variant="secondary" />
            <MenuItem variant="secondary" lastItem={true} />
          </View>
          <View style={{paddingHorizontal: 20, marginVertical: 10}}>
            <InputBox variant="search" placeholder="Search" />
          </View>
          <View
            style={{
              marginBottom: 50,
              marginLeft: 20,
            }}>
            <CatagoryRow catagoryName="Continental" navigation={navigation} />
            <CatagoryRow catagoryName="Arabic" navigation={navigation} />
            <CatagoryRow catagoryName="Pakistani" navigation={navigation} />
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CustomMenuCreation');
          }}
          style={{
            position: 'absolute',
            bottom: 50,
            right: 20,
            backgroundColor: PRIMARY,
            width: 60,
            height: 60,
            borderRadius: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={20.537}
            height={16.786}
            viewBox="0 0 24.537 16.786">
            <Path
              data-name="Icon ionic-ios-arrow-round-back"
              d="M15.51 15.986a1.068 1.068 0 01-.008-1.5l4.962-4.979H1.555a1.063 1.063 0 010-2.126h18.909l-4.971-4.979a1.076 1.076 0 01.008-1.5 1.058 1.058 0 011.5.008l6.733 6.778h0a1.193 1.193 0 01.221.335 1.014 1.014 0 01.082.409 1.066 1.066 0 01-.3.744l-6.736 6.785a1.041 1.041 0 01-1.491.025z"
              fill="#fff"
              stroke="#fff"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    );
  }
}
