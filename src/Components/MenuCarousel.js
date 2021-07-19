import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {FORTH, PRIMARY, TEXT_COLOR} from '../Constants/Colors';
import {Width} from '../Constants/Constants';
import Button from './Button';
import MenuItem from './MenuItem';

export class MenuCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      entries: [
        {
          title: 'Menu 1',
          text: 'Text 1',
        },
        {
          title: 'Menu 2',
          text: 'Text 2',
        },
        {
          title: 'Menu 3',
          text: 'Text 3',
        },
        {
          title: 'Menu 4',
          text: 'Text 4',
        },
        {
          title: 'Menu 5',
          text: 'Text 5',
        },
      ],
    };
  }

  _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: '#f6f6f6',
          borderRadius: 5,
          marginVertical: 10,
          padding: 20,
          position: 'relative',
          marginBottom: 50,
        }}>
        <Text
          style={{
            textAlign: 'right',
            fontSize: 18,
            fontWeight: 'bold',
            color: PRIMARY,
            marginBottom: 20,
          }}>
          {item.title}
        </Text>
        <MenuItem variant="primary" />
        <MenuItem variant="primary" />
        <MenuItem variant="primary" />
        <MenuItem variant="primary" />
        <MenuItem variant="primary" lastItem={true} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 15, color: TEXT_COLOR}}>Price</Text>
          <Text style={{fontSize: 15, color: FORTH}}>Rs 43,00,000</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: -30,
            width: '100%',
            alignSelf: 'center',
            paddingHorizontal: 30,
          }}>
          <Button placeholder="Select" veriant="primary_outlined" />
        </View>
      </View>
    );
  };

  render() {
    return (
      <Carousel
        // ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={3000}
        itemWidth={Width - 80}
      />
    );
  }
}
