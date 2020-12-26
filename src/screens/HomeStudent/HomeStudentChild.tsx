import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ItemFunction, CircleImage, ItemStudent} from '../../components';
import * as Animate from 'react-native-animatable';
import OptionsMenu from 'react-native-option-menu';
import {system} from '../../redux';
import {connect} from 'react-redux';

export const HomeStudentChild = (props: any) => {
  const logOut = () => {
    props.LogOut();
  };
  const cancel = () => {};
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
          <View style={styles.abc}>
            <OptionsMenu
              button={require('../../assets/images/menu.png')}
              destructiveIndex={1}
              buttonStyle={styles.threeDot}
              options={['Đăng xuất', 'Hủy']}
              actions={[logOut, cancel]}
              style={{width: wp('6'), height: wp('10'), backgroundColor: 'red'}}
            />
          </View>
        </View>
        <ItemStudent />

        <ScrollView style={{marginBottom: hp('4')}}>
          <View style={styles.Row}>
            <ItemFunction
              source={require('../../assets/images/schedule1.png')}
              title={'Thời Khóa Biểu'}
              color={['#FFB760', '#F37335']}
              onPress={() => props.navigation.navigate('Schedule')}
            />
            <ItemFunction
              onPress={() => props.navigation.navigate('InformationStudent')}
              source={require('../../assets/images/profile-user.png')}
              title={'Xem thông tin'}
              color={['#73F022', '#799F0C']}
            />
          </View>
          <View style={styles.Row}>
            <ItemFunction
              source={require('../../assets/images/open-seach.png')}
              title={'Điểm môn học'}
              color={['#EF3B36', '#E92A17']}
            />
            <ItemFunction
              source={require('../../assets/images/newspaper.png')}
              title={'Tin tức'}
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
        </ScrollView>
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
    width: wp('5'),
    height: wp('5'),
  },
  abc: {
    position: 'absolute',
    top: hp('3'),
    right: 5,
  },
});
const mapStateFromProps = (state: any) => {
  return {
    userInfo: state.systems.userInfo,
  };
};
export default connect(mapStateFromProps, system)(HomeStudentChild);
