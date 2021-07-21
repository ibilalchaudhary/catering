import React, {Component} from 'react';
import {View} from 'react-native';
import {WHITE} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';
import Header from '../Components/Header';
import InputBox from '../Components/InputBox';
import Button from '../Components/Button';

export default class CustomMenuScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <View
        style={{
          backgroundColor: WHITE,
          height: Height,
          width: Width,
        }}>
        <Header
          light={false}
          placeholder="Change Password"
          backPath="EditProfile"
          navigation={navigation}
        />
        <View
          style={{
            display: 'flex',
            marginHorizontal: 20,
            marginVertical: 20,
            backgroundColor: WHITE,
            flex: 1,
          }}>
          <InputBox
            variant="gray"
            placeholder="Enter Old Password"
            secureTextEntry={true}
          />
          <InputBox
            variant="gray"
            placeholder="Enter New Password"
            secureTextEntry={true}
          />
          <InputBox
            variant="gray"
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <View
            style={{
              flex: 1,
              maxHeight: 60,
              marginTop: 70,
            }}>
            <Button
              veriant="primary"
              placeholder="Change Password"
              onPress={() => {}}
            />
          </View>
        </View>
      </View>
    );
  }
}
