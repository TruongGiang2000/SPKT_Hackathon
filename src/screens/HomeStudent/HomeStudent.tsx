import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ItemFunction} from '../../components';

export const HomeStudent = (props: any) => {
  return (
    <View style={styles.MainContainer}>
      <View style={styles.Row}>
        <ItemFunction
          source={require('schedule1.png')}
          title={'Xem Lịch'}
          color={['#FDC830', '#F37335']}
        />
        <ItemFunction
          source={require('schedule1.png')}
          title={'Xem Lịch'}
          color={['#FDC830', '#F37335']}
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
    flexDirection: 'row',
  },
});
