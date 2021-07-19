import React, {Component} from 'react';
import {
  ImageBackground,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from '../Components/Button';
import Checkbox from '../Components/Checkbox';
import Heading from '../Components/Heading';
import InputBox from '../Components/InputBox';
import Logo from '../Components/Logo';
import {TEXT_COLOR, THIRD} from '../Constants/Colors';
import {Height, Width} from '../Constants/Constants';

export default class RegisterScreen extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ImageBackground
        source={require('../Assets/register_background.png')}
        style={{height: Height, flex: 1}}>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <Logo light={false} />
          <Heading varinat="primary" placeholder="Welcome Back!" />
          <InputBox placeholder="User Name" variant="light" />
          <InputBox placeholder="Email" variant="light" />
          <InputBox
            placeholder="Password"
            variant="light"
            secureTextEntry={true}
          />
          <InputBox
            placeholder="Confirm Password"
            variant="light"
            secureTextEntry={true}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexWrap: 'wrap',
              marginVertical: 20,
            }}>
            <Checkbox placeholder="I agree with the processing of " />
            <TouchableOpacity>
              <Text style={styles.link}>personal data</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                color: TEXT_COLOR,
              }}>
              &
            </Text>
            <TouchableOpacity>
              <Text style={styles.link}>privacy policy</Text>
            </TouchableOpacity>
          </View>
          <Button
            placeholder="Sign Up"
            veriant="primary"
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 50,
            }}>
            <Text style={{fontSize: 16, color: TEXT_COLOR, marginRight: 5}}>
              Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Login');
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: TEXT_COLOR,
                  textDecorationStyle: 'solid',
                  textDecorationLine: 'underline',
                  textDecorationColor: TEXT_COLOR,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  link: {
    marginHorizontal: 5,
    fontSize: 16,
    color: TEXT_COLOR,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    textDecorationColor: TEXT_COLOR,
    textDecorationLine: 'underline',
  },
});
