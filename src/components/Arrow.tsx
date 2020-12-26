import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Ripple from 'react-native-material-ripple';
export const Arrow = (props: any) => {
  const {title, onPress} = props;
  return (
    <View style={styles.Row}>
      <Ripple onPress={onPress}>
        <Image
          source={require('../assets/images/left-arrow.png')}
          style={styles.Icon}
        />
      </Ripple>
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
