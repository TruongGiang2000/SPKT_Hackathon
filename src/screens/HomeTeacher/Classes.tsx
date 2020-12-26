import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {FieldUser, CircleImage} from '../../components';
import {connect} from 'react-redux';
import {system} from '../../redux';
import {Arrow} from '../../components';
import Ripple from 'react-native-material-ripple';
import Modal from 'react-native-modal';
const Classes = (props: any) => {
  const {userInfo, classes} = props;
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    props.getClass({id: userInfo?.classes?.id});
  }, []);
  console.log('classes', classes);
  const renderItem = ({item}) => {
    return (
      <Ripple onPress={() => setShowModal(true)}>
        <Text style={styles.txtItem}>{item.name}</Text>
        <View style={styles.line} />
      </Ripple>
    );
  };
  return (
    <View style={styles.MainContainer}>
      <Arrow
        title={'Danh sách học sinh'}
        onPress={() => props.navigation.goBack()}
      />
      <FlatList
        data={classes}
        renderItem={renderItem}
        contentContainerStyle={{marginTop: hp(2)}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp(2),
    paddingVertical: hp(2),
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: hp('20'),
  },
  txtItem: {
    fontFamily: 'roboto-slab-regular',
    fontSize: wp(3.4),
    paddingVertical: hp(2),
    textAlign: 'center',
  },
  personal: {
    color: 'white',
    fontFamily: 'roboto-slab-bold',
    position: 'absolute',
    alignSelf: 'center',
    marginTop: hp('5'),
    fontSize: wp('4'),
  },
  line: {
    height: 1,
    backgroundColor: '#000',
    alignSelf: 'center',
    width: '95%',
  },
  circleImage: {
    marginTop: wp('20'),
  },
  viewField: {
    paddingHorizontal: wp('5.5'),
  },
  fieldUser: {
    marginTop: hp('2'),
  },
  viewAvatarImage: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
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
    classes: state.systems.classes,
  };
};
export default connect(mapStateFromProps, {...system})(Classes);
