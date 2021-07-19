import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import Heading from '../Components/Heading';
import InputBox from '../Components/InputBox';
import DatePickerBox from '../Components/DatePickerBox';
import TimePickerBox from '../Components/TimePickerBox';
import Logo from '../Components/Logo';
import {FORTH, PRIMARY, TEXT_COLOR, THIRD, WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Svg, {G, Path} from 'react-native-svg';
import Header from '../Components/Header';
import {MenuCarousel} from '../Components/MenuCarousel';

function MenuBtn({placeholder, svg, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 150,
        height: 140,
        backgroundColor: WHITE,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: FORTH,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
      }}>
      {svg}
      <Text style={{marginTop: 15}}>{placeholder}</Text>
    </TouchableOpacity>
  );
}

export default class MenuSelectScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View style={{backgroundColor: THIRD, height: Height, width: Width}}>
        <ImageBackground
          source={require('../Assets/pre_made_menu_background.png')}
          style={{height: Height, flex: 1}}>
          <Header
            light={false}
            placeholder="Pre-made Menu"
            backPath="FeatureSelectPreMade"
            navigation={navigation}
          />
          <ScrollView style={{flex: 1}}>
            <View style={{paddingHorizontal: 20}}>
              <InputBox variant="search" placeholder="Search" />
            </View>
            <View
              style={{
                marginBottom: 50,
                display: 'flex',
                alignItems: 'center',
                flex: 1,
              }}>
              <MenuCarousel />
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}
