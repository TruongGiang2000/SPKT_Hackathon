import React from 'react';
import {View, StyleSheet, Text, Image, ToastAndroid} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {ItemFunction, CircleImage} from '../../components';
import OptionsMenu from 'react-native-option-menu';
import lodash from 'lodash';
import {system} from '../../redux';

const HomeTeacher = (props: any) => {
  const logOut = () => {
    props.LogOut();
  };
  const cancel = () => {};
  const {userInfo} = props;
  const {data} = userInfo;
  return (
    <View style={styles.MainContainer}>
      <View style={styles.rowBase}>
        <CircleImage size={wp(12)} source={{uri: data?.avatar}} />
        <View>
          <Text style={styles.name}>{data?.name}</Text>
          <Text style={styles.competence}>(Giáo viên)</Text>
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

      <View style={styles.viewRow}>
        <ItemFunction
          color={['#667db6', '#0082c8', '#0082c8', '#667db6']}
          title={'Lớp chủ nhiệm'}
          source={require('../../assets/images/presentation.png')}
          onPress={() =>
            data?.classes == ''
              ? ToastAndroid.show(
                  'Bạn hiện tại không phải là giáo viên chú nhiệm!!',
                  ToastAndroid.LONG,
                )
              : props.navigation.navigate('Classes')
          }
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
          source={require('../../assets/images/newspaper.png')}
        />
        <ItemFunction
          onPress={() => props.navigation.navigate('InformationTeacher')}
          color={['#06beb6', '#48b1bf']}
          title={'Xem thông tin'}
          source={require('../../assets/images/profile-user.png')}
        />
      </View>
      <View style={styles.viewRow}>
        <ItemFunction
          color={['#FF5733', '#FF5733']}
          title={'Sổ liên lạc'}
          source={require('../../assets/images/newspaper.png')}
        />
        <ItemFunction
          color={['#606c88', '#3f4c6b']}
          title={'Thông báo'}
          source={require('../../assets/images/profile-user.png')}
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
  rowBase: {
    flexDirection: 'row',
    alignItems: 'center',
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
export default connect(mapStateFromProps, system)(HomeTeacher);
