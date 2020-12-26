import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export const ItemFunction = (props: any) => {
  return (
    <Pressable style={styles.MainContainer}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.abc}>
        <Text style={[styles.title]}>Xem lịch</Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    alignSelf: 'center',
  },
  abc: {
    height: hp('20'),
    width: wp('40'),
  },
});
