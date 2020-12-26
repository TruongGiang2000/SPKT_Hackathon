import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ItemFunction, CircleImage, Arrow} from '../../components';

export const HomeStudent = (props: any) => {
  return (
    <View style={styles.MainContainer}>
      <Arrow title={'Thời Khóa Biểu'} />

      <View>
        <CircleImage
          size={20}
          source={require('../../assets/images/avatar.jpg')}
        />
      </View>
      <View style={styles.Row}>
        <ItemFunction
          source={require('../../assets/images/schedule1.png')}
          title={'Thời Khóa Biểu'}
          color={['#FFB760', '#F37335']}
        />
        <ItemFunction
          source={require('../../assets/images/newspaper.png')}
          title={'Tin tức'}
          color={['#FFE800', '#FFE800']}
        />
      </View>
      <View style={styles.Row}>
        <ItemFunction
          source={require('../../assets/images/open-seach.png')}
          title={'Điểm môn học'}
          color={['#EF3B36', '#E92A17']}
        />
        <ItemFunction
          source={require('../../assets/images/profile-user.png')}
          title={'Xem thông tin'}
          color={['#22B1F0', '#22B1F0']}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  Row: {
    marginBottom: hp('10'),
    flexDirection: 'row',
  },
});
