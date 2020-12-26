import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ItemFunction, CircleImage} from '../../components';
import * as Animate from 'react-native-animatable';
export const HomeStudentChild = (props: any) => {
  return (
    <View style={styles.MainContainer}>
      <Animate.View animation={'fadeInUp'}>
        <View style={styles.rowBase}>
          <CircleImage
            size={wp(12)}
            source={require('../../assets/images/avatarGiang.jpg')}
          />
          <View>
            <Text style={styles.name}>Nguyễn Vũ Trường Giang</Text>
            <Text style={styles.competence}>(Học sinh)</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/menu.png')}
          style={styles.threeDot}
        />

        <View style={styles.Row}>
          <ItemFunction
            source={require('../../assets/images/schedule1.png')}
            title={'Thời Khóa Biểu'}
            color={['#FFB760', '#F37335']}
            onPress={() => props.navigation.navigate('Schedule')}
          />
          <ItemFunction
            source={require('../../assets/images/newspaper.png')}
            title={'Tin tức'}
            color={['#F09819', '#EDDE5D']}
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
        <View style={styles.Row}>
          <ItemFunction
            source={require('../../assets/images/test.png')}
            title={'Rèn luyện trắc nghiệm'}
            color={['#3a7bd5', '#3a6073']}
          />
          <ItemFunction
            source={require('../../assets/images/notification.png')}
            title={'Nhắc nhở'}
            color={['#ffe259', '#ffa751']}
          />
        </View>
      </Animate.View>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  Row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(4),
  },
  rowBase: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: wp(3.8),
    fontFamily: 'roboto-slab-bold',
    color: '#000',
    marginLeft: wp(2),
  },
  competence: {
    fontSize: wp(3),
    fontFamily: 'roboto-slab-regular',
    color: '#000',
    textAlign: 'center',
  },
  threeDot: {
    position: 'absolute',
    top: hp(3),
    right: 5,
    width: wp(5),
    height: wp(5),
  },
});
