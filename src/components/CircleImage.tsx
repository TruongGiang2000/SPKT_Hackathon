import React, {Component, useState} from 'react';
import {StyleSheet, Pressable, Image} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import shadow from '../utils/shadow';

export const CircleImage = (props: any) => {
  const {source, size, onPress, styleImage} = props;
  return (
    <Pressable style={props.style} onPress={onPress}>
      <Image
        {...props}
        source={source}
        style={[
          {
            width: size || wp('20'),
            height: size || wp('20'),
            borderRadius: size / 2 || wp('20') / 2,
            borderColor: '#000',
            borderWidth: 1,
          },
          styleImage,
        ]}
      />
    </Pressable>
  );
};
const styles = StyleSheet.create({});
