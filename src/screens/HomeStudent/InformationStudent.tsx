import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FieldUser, CircleImage} from '../../components';
import {connect} from 'react-redux';
import moment from 'moment';
const InformationStudent = (props: any) => {
  const {userInfo} = props;
  const {data} = userInfo;
  return (
    <View style={styles.MainContainer}>
      <Image
        source={require('../../assets/images/congtamquan.jpg')}
        style={styles.headerImage}
        resizeMode={'cover'}
        blurRadius={7}
      />
      <Text style={styles.personal}>Cá nhân</Text>
      <View style={styles.viewAvatarImage}>
        <CircleImage
          source={{uri: data?.avatar}}
          style={styles.circleImage}
          size={wp('27')}
          resizeMode={'cover'}
        />
      </View>
      <Text style={styles.fullName}>{data?.name}</Text>
      <View style={styles.viewField}>
        <FieldUser
          style={styles.fieldUser}
          title={'Ngày sinh'}
          content={moment(data?.birthday, 'yyyy-mm-dd').format('DD/MM/YYYY')}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Giới tính'}
          content={data?.gender}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Điện thoại'}
          content={data?.phonenumber}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Địa chỉ'}
          content={data?.address}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Lớp học'}
          content={userInfo?.classes?.name}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Trường học'}
          content={userInfo?.schoolname}
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
    color: '#5C6979',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    textAlign: 'center',
    marginTop: hp('3.5'),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    userInfo: state.systems.userInfo,
  };
};
export default connect(mapStateFromProps, null)(InformationStudent);
