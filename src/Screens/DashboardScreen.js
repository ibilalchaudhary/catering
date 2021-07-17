import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Height, USER_NAME} from '../Constants/Constants';
import Heading from '../Components/Heading';
import {TEXT_COLOR, THIRD} from '../Constants/Colors';
import Svg, {G, Path} from 'react-native-svg';
import Button from '../Components/Button';

export default class DashboardScreen extends Component {
  render() {
    const isOrdered = true;
    return (
      <ImageBackground
        source={require('../Assets/dashboard_background.png')}
        style={{height: Height, flex: 1}}>
        <ScrollView style={{flex: 1, paddingHorizontal: 20}}>
          <View
            style={{
              paddingVertical: 20,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity>
              <Image
                source={require('../Assets/userPic.png')}
                style={{width: 50, height: 50}}
              />
            </TouchableOpacity>
            <Image
              source={require('../Assets/logo.png')}
              style={{width: 110, height: 50}}
            />
          </View>
          {isOrdered ? (
            <View style={{marginVertical: 20}}>
              <View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      height: 50,
                      width: 50,
                      backgroundColor: THIRD,
                      borderRadius: 50,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22.29}
                      height={22.808}
                      viewBox="0 0 23.29 31.808">
                      <G data-name="Group 18" fill="#fff">
                        <Path
                          data-name="Path 2160"
                          d="M2.193 17.549L.148 30.841a.839.839 0 001.647.316l3.14-13.608z"
                        />
                        <Path
                          data-name="Path 2161"
                          d="M8.087 17.549L6.042 30.841a.839.839 0 001.647.316l3.141-13.608z"
                        />
                        <Path
                          data-name="Path 2162"
                          d="M16.591 17.549l2.045 13.292a.839.839 0 01-1.647.316l-3.14-13.608z"
                        />
                        <Path
                          data-name="Path 2163"
                          d="M20.978 17.549l2.045 13.292a.839.839 0 01-1.647.316l-3.14-13.608z"
                        />
                      </G>
                      <Path
                        data-name="Path 2164"
                        d="M3.294 13.162H4.55a3.727 3.727 0 003.49-2.419l3.495-9.32A2.194 2.194 0 0113.586 0h7.508a2.194 2.194 0 012.177 2.466l-.929 7.431a3.727 3.727 0 01-3.7 3.265 1.1 1.1 0 00-1.1 1.1V17H2.194v-2.741a1.1 1.1 0 011.1-1.1z"
                        fill="#fff"
                      />
                      <Path
                        data-name="Path 2165"
                        d="M3.294 15.355h10.968a1.1 1.1 0 011.1 1.1v1.1H2.194v-1.1a1.1 1.1 0 011.1-1.1z"
                        fill="#fff"
                      />
                      <Path
                        data-name="Path 2166"
                        d="M3.842 15.355h10.42a1.1 1.1 0 011.1 1.1v1.1H2.742v-1.1a1.1 1.1 0 011.1-1.1z"
                        fill="#fff"
                      />
                      <Path
                        data-name="Path 2167"
                        d="M23.273 2.466l-1.337 10.7h-3.29a1.1 1.1 0 00-1.1 1.1v3.29h-2.191v-3.29a1.1 1.1 0 011.1-1.1 3.727 3.727 0 003.7-3.265l.554-4.427a6.344 6.344 0 00.049-.779A6.276 6.276 0 0018.647 0h2.45a2.193 2.193 0 012.176 2.466z"
                        fill="#fff"
                      />
                      <Path
                        data-name="Path 2168"
                        d="M21.388 17.549h-3.839v-3.29a1.1 1.1 0 011.1-1.1 3.727 3.727 0 003.7-3.265z"
                        fill="#fff"
                      />
                      <Path
                        data-name="Path 2169"
                        d="M2.194 17.549H0v-3.287a1.1 1.1 0 011.1-1.1h2.19a1.1 1.1 0 00-1.1 1.1z"
                        fill="#fff"
                      />
                    </Svg>
                  </View>
                </View>
                <View></View>
              </View>
              <Button
                veriant="primary"
                placeholder="Place Order"
                onPress={() => {}}
              />
            </View>
          ) : (
            <View style={{marginVertical: 20}}>
              <Text style={{fontSize: 14, color: TEXT_COLOR}}>
                Hi {USER_NAME}
              </Text>
              <Heading varinat="yellow" placeholder="Let's Order" />
              <TouchableOpacity
                style={{
                  backgroundColor: '#F6F6F6',
                  borderRadius: 5,
                  height: 120,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33.359}
                  height={33.359}
                  viewBox="0 0 33.359 33.359">
                  <G
                    data-name="Icon ionic-md-add-circle-outline"
                    fill="#ffca40">
                    <Path
                      data-name="Path 2254"
                      d="M14.995 25.26v-6.9h-6.9v-3.364h6.9v-6.9h3.368v6.9h6.9v3.368h-6.9v6.9z"
                    />
                    <Path
                      data-name="Path 2255"
                      d="M29.991 16.679a13.306 13.306 0 11-3.9-9.414 13.256 13.256 0 013.9 9.414m3.368 0a16.679 16.679 0 10-16.679 16.68 16.677 16.677 0 0016.679-16.68z"
                    />
                  </G>
                </Svg>
                <Text style={{fontSize: 14, color: TEXT_COLOR, marginTop: 10}}>
                  Place your First Order
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </ImageBackground>
    );
  }
}
