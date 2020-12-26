import React from 'react';
import {View, StyleSheet, Text, Pressable, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import shadow from '../utils/shadow';

export const ItemFunction = (props: any) => {
  const {color, source, title} = props;

  return (
    <Pressable style={styles.MainContainer}>
      <LinearGradient colors={color} style={styles.abc}>
        <Image source={source} style={styles.Icon} />
        <Text style={[styles.title]}>{title}</Text>
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
    fontSize: wp('4.5'),
    alignSelf: 'center',
    fontFamily: 'roboto-slab-bold',
    color: '#FFFFFF',
    marginTop: hp('2'),
  },
  abc: {
    height: hp('25'),
    width: wp('40'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2'),
    ...shadow(6),
  },
  Icon: {
    height: hp('6'),
    width: wp('12'),
  },
});
