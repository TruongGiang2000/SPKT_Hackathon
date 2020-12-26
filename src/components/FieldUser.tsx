import React, {Component} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export const FieldUser = (props: any) => {
  const {style, title, content, onPress} = props;
  return (
    <Pressable style={style} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.line} />
    </Pressable>
  );
};
const styles = StyleSheet.create({
  title: {
    color: '#5C6979',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('3.8'),
  },
  content: {
    color: '#323B45',
    fontFamily: 'roboto-slab.regular',
    fontSize: wp('3.8'),
  },
  line: {
    marginTop: hp('2'),
    width: '100%',
    height: 1.5,
    backgroundColor: '#E0E6EE',
  },
});
