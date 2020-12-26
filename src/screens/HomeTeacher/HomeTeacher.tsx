import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ItemFunction} from '../../components';
export const HomeTeacher = (props: any) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.viewRow}>
        <ItemFunction
          color={['#667db6', '#0082c8', '#0082c8', '#667db6']}
          title={'Lớp chủ nhiệm'}
          source={require('../../assets/images/presentation.png')}
        />
        <ItemFunction
          color={['#ffb347', '#ffcc33']}
          title={'Danh sách lớp dạy'}
          source={require('../../assets/images/graduation.png')}
        />
      </View>
      <View style={styles.viewRow}>
        <ItemFunction
          color={['#cb2d3e', '#ef473a']}
          title={'Tin tức'}
          source={require('../../assets/images/graduation.png')}
        />
        <ItemFunction
          color={['#06beb6', '#48b1bf']}
          title={'Xem thông tin'}
          source={require('../../assets/images/graduation.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
});
