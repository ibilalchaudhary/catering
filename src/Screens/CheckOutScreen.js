import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import Navigate from '../Navigation/Navigate';
import {ScrollView} from 'react-native-gesture-handler';
import SavedAddresses from '../Components/SavedAddresses';
import Button from '../Components/Button';

export default class CheckOutScreen extends Component {
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
          placeholder="Checkout"
          backPath="Cart"
          navigation={navigation}
        />
        <ScrollView style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            Delivery Address
          </Text>
          <SavedAddresses navigation={navigation} path={true} />
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            Menu
          </Text>
          <View></View>
          <Button
            veriant="primary"
            placeholder="Confirm Order"
            onPress={() => {
              NavigateTo('OrderPlaced', navigation);
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
