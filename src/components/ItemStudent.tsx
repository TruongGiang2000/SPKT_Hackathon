import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CircleImage} from './CircleImage';
export const ItemStudent = (props: any) => {
  const {name, phone, address, source} = props;
  return (
    <View style={styles.MainContainer}>
      <CircleImage source={source} />
      <View style={styles.conTent}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.sdt}>{phone}</Text>
        <Text style={styles.adress}>{address}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'row',
    marginTop: hp('2'),
    borderColor: 'black',
    borderRadius: wp('4'),
    borderWidth: wp('0.5'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp('2'),
  },
  conTent: {
    marginLeft: wp('3'),
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
