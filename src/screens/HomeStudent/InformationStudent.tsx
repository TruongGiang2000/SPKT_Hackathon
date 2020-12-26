import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FieldUser, CircleImage} from '../../components';

export const InformationStudent = (props: any) => {
  return (
    <View style={styles.MainContainer}>
      <Image
        source={require('../../assets/images/congtamquan3.jpg')}
        style={styles.headerImage}
        resizeMode={'cover'}
        blurRadius={0.5}
      />
      <Text style={styles.personal}>Cá nhân</Text>
      <Image
        source={require('../../assets/images/left-arrow2.png')}
        style={styles.icon}
      />

      <View style={styles.viewAvatarImage}>
        <CircleImage
          source={require('../../assets/images/avatar.jpg')}
          style={styles.circleImage}
          size={wp('27')}
          resizeMode={'cover'}
        />
      </View>
      <Text style={styles.fullName}>Hoàng Trần Vinh Quang</Text>
      <View style={styles.viewField}>
        <FieldUser
          style={styles.fieldUser}
          title={'Ngày sinh'}
          content={'8/12/2000'}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Giới tính'}
          content={'Nam'}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Điện thoại'}
          content={'0399644146'}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Địa chỉ'}
          content={'Bình Dương'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: hp('20'),
  },
  personal: {
    color: 'white',
    fontFamily: 'roboto-slab-bold',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp('3'),
    fontSize: wp('4'),
  },
  circleImage: {
    marginTop: wp('15'),
  },
  viewAvatarImage: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
  },
  viewField: {
    paddingHorizontal: wp('5.5'),
  },
  fieldUser: {
    marginTop: hp('2'),
  },
  fullName: {
    color: '#000000',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4.5'),
    textAlign: 'center',
    marginTop: hp('3.5'),
  },
  icon: {
    height: wp('8'),
    width: wp('8'),
    marginTop: wp('5'),
    position: 'absolute',
    marginLeft: wp('2'),
  },
});
