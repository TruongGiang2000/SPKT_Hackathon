import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {FieldUser, CircleImage} from '../../components';
import Modal from 'react-native-modal';
import {connect} from 'react-redux';
import moment from 'moment';
const InformationTeacher = (props: any) => {
  const [showModal, setShowModal] = useState(false);
  const getIcon = (name: any) => {
    const item = listSubjectMain.findIndex((item) => item.toString() == name);
    return dataCompare[item].source;
  };
  const dataCompare = [
    {
      source: require('../../assets/images/atom.png'),
      name: 'Vật Lý',
    },
    {
      source: require('../../assets/images/flask.png'),
      name: 'Hóa học',
    },
    {
      source: require('../../assets/images/lab.png'),
      name: 'Sinh học',
    },
    {
      source: require('../../assets/images/clock.png'),
      name: 'Lịch Sử',
    },
    {
      source: require('../../assets/images/layers.png'),
      name: 'Địa lí',
    },
    {
      source: require('../../assets/images/musical-notes.png'),
      name: 'Âm nhạc',
    },
    {
      source: require('../../assets/images/paint-palette.png'),
      name: 'Mĩ thuật',
    },
    {
      source: require('../../assets/images/book.png'),
      name: 'Ngữ văn',
    },
    {
      source: require('../../assets/images/english-language.png'),
      name: 'Tiếng anh',
    },
    {
      source: require('../../assets/images/technology.png'),
      name: 'Công nghệ',
    },
    {
      source: require('../../assets/images/classroom.png'),
      name: 'Giáo dục công dân',
    },
  ];
  const {userInfo}: any = props;
  const {data} = userInfo;
  const listSubjectMain = data?.listSubject.filter((it) => it);
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
          title={'Giới tính'}
          content={data?.gender}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Ngày sinh'}
          content={moment(data?.birthday, 'yyyy-mm-dd').format('DD/MM/YYYY')}
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
        {userInfo?.classes && (
          <FieldUser
            style={styles.fieldUser}
            title={'Lớp chủ nhiệm'}
            content={userInfo?.classes?.name}
          />
        )}
        <FieldUser
          style={styles.fieldUser}
          title={'Môn học'}
          content={'Nhấn vào để xem những môn học bạn dạy!'}
          onPress={() => setShowModal(true)}
        />
        <FieldUser
          style={styles.fieldUser}
          title={'Trường'}
          content={userInfo?.schoolname}
        />
        {showModal && (
          <Modal
            isVisible={showModal}
            onBackdropPress={() => setShowModal(false)}>
            <View style={styles.ModalCustem}>
              <FlatList
                data={listSubjectMain}
                renderItem={({item}) => (
                  <ItemSubjects
                    source={getIcon(item.toString())}
                    name={item.toString()}
                  />
                )}
                keyExtractor={(item, index) => `${item.name}${index}`}
              />
            </View>
          </Modal>
        )}
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
    color: 'black',
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('4'),
    textAlign: 'center',
    marginTop: hp('3.5'),
  },
  Row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp('2'),
    paddingVertical: hp('2'),
    // borderRadius: wp('3'),
    // borderColor: 'black',
    // borderWidth: 1,
  },
  icon: {
    height: wp('5'),
    width: wp('5'),
    marginRight: wp('3'),
  },
  ModalCustem: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: wp('10'),
    paddingHorizontal: wp('3'),
    paddingVertical: hp('2'),
    borderRadius: wp('2'),
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'roboto-slab-regular',
    fontSize: wp('5'),
    color: 'black',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  },
});
const ItemSubjects = (props: any) => {
  const {name, source} = props;
  return (
    <>
      <View style={styles.Row}>
        <Image source={source} style={styles.icon} />
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.line} />
    </>
  );
};
const mapStateFromProps = (state: any) => {
  return {
    userInfo: state.systems.userInfo,
  };
};
export default connect(mapStateFromProps, null)(InformationTeacher);
