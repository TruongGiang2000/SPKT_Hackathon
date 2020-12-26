import React, {useState} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Hoshi} from 'react-native-textinput-effects';
import ButtonCustom from '../components/ButtonCustom';
export const Login = (props: any) => {
  return (
    <ImageBackground
      source={require('../assets/images/image5.jpg')}
      style={{height: '100%', width: '100%'}}>
      <View style={styles.MainContainer}>
        <Text style={styles.Title}>EDUCATION</Text>

        <Hoshi
          labelStyle={styles.LabelStyle}
          style={styles.TextInput}
          label={'Tài khoản'}
          // this is used as active border color
          borderColor={'#22B1F0'}
          // active border height
          borderHeight={1}
          inputPadding={16}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
        />
        <Hoshi
          labelStyle={styles.LabelStyle}
          secureTextEntry={true}
          style={styles.TextInput}
          label={'Mật khẩu'}
          // this is used as active border color
          borderColor={'#22B1F0'}
          // active border height
          borderHeight={1}
          inputPadding={16}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
        />
        <ButtonCustom title={'Đăng nhập'} style={styles.Down2} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('10'),
    alignSelf: 'center',
    color: '#22B1F0',
    marginTop: hp('10'),
    marginBottom: hp('8'),
  },

  Down2: {
    alignItems: 'center',
    marginTop: hp('4'),
  },
  TextInput: {
    width: wp('80'),
    marginTop: hp('2'),
  },
  LabelStyle: {
    color: '#22B1F0',
    fontFamily: 'roboto-slab-regular',
  },
});
