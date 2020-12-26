import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const Arrow = (props: any) => {
  const {title} = props;
  return (
    <View style={styles.Row}>
      <Image
        source={require('../assets/images/left-arrow.png')}
        style={styles.Icon}
      />
      <Text style={styles.Title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  Icon: {
    height: wp('8'),
    width: wp('8'),
    marginRight: wp('3.5'),
  },
  Title: {
    fontSize: wp('5'),
    fontFamily: 'roboto-slab-bold',
  },
});
