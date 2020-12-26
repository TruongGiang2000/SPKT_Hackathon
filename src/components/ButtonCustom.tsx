import {title} from 'process';
import React, {Component} from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ripple from 'react-native-material-ripple';
class ButtonCustom extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {title, style, titleStyle, onPress} = this.props;
    return (
      <Ripple style={[styles.MainContainer, style]} onPress={onPress}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </Ripple>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    backgroundColor: '#22B1F0',
    borderRadius: wp('5'),
    paddingHorizontal: wp('4'),
    paddingVertical: wp('3'),
    width: wp('50'),
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'roboto-slab-regular',
    fontSize: wp('5'),
  },
});
export default ButtonCustom;
