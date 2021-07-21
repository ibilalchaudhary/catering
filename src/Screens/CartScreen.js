import React, {Component} from 'react';
import {ScrollView, View, TextInput, ImageBackground} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Button from '../Components/Button';
import MenuCarouselItem from '../Components/MenuCarouselItem';
export default class CartScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/cart_background.png')}
        style={{backgroundColor: WHITE, height: Height, width: Width}}>
        <Header
          light={true}
          placeholder="Cart"
          backPath="CustomMenuCreation"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <MenuCarouselItem title="Menu name" button={false} istitle={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <TextInput
              placeholder="Enter Coupon Code"
              style={{
                height: 50,
                width: '70%',
                backgroundColor: 'transparent',
                borderColor: WHITE,
                borderWidth: 1,
                borderTopLeftRadius: 8,
                borderBottomLeftRadius: 8,
                paddingHorizontal: 20,
                color: WHITE,
              }}
              placeholderTextColor={WHITE}
            />
            <Button veriant="third" placeholder="Apply" />
          </View>
          <Button
            veriant="third"
            placeholder="Checkout"
            onPress={() => {
              navigation.navigate('OrderPlaced');
            }}
          />
          <View style={{marginBottom: 50}} />
        </ScrollView>
      </ImageBackground>
    );
  }
}
