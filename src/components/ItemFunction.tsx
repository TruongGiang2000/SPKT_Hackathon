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
        <Text style={[styles.title]} numberOfLines={2}>
          {title}
        </Text>
      </LinearGradient>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    height: hp('25'),
    width: wp('40'),
  },
  title: {
    fontSize: wp('4.5'),
    alignSelf: 'center',
    fontFamily: 'roboto-slab-bold',
    color: '#FFFFFF',
    marginTop: hp('2'),
    textAlign: 'center',
  },
  abc: {
    alignItems: 'center',
    borderRadius: wp('2'),
    ...shadow(6),
    flex: 1,
    paddingHorizontal: wp(2),
  },
  Icon: {
    height: hp('6'),
    width: wp('12'),
    marginTop: '40%',
  },
});
