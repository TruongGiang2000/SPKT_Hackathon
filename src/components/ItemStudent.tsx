import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CircleImage} from './CircleImage';
export const ItemStudent = (props: any) => {
  return (
    <View style={styles.MainContainer}>
      <CircleImage source={require('../assets/images/avatar.jpg')} />
      <View style={styles.conTent}>
        <Text style={styles.name}>Hoàng Trần Vinh Quang</Text>
        <Text style={styles.sdt}>039999999</Text>
        <Text style={styles.adress}>
          41/11A KP thống nhất 1 , Dĩ An , Bình Dương
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: hp('2'),
    borderColor: 'black',
    borderRadius: wp('4'),
    borderWidth: wp('0.5'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp('2'),
  },
  conTent: {
    marginLeft: wp('2'),
  },
  name: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
  },
  sdt: {
    fontFamily: 'roboto-slab-regular',
    fontSize: wp('3.5'),
  },
  adress: {
    fontFamily: 'roboto-slab-regular',
    fontSize: wp('3.5'),
  },
});
