import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Hoshi} from 'react-native-textinput-effects';
import ButtonCustom from '../components/ButtonCustom';
import {connect} from 'react-redux';
import {system} from '../redux';
import {actionMain} from '../utils/actionsMain';
const Login = (props: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const {token, messageLogin, isStudent} = props;
  const onChangePhone = (value: any) => {
    setPhoneNumber(value);
  };
  const onChangePass = (value: any) => {
    setPassword(value);
  };
  const login = () => {
    const dataLogin = {
      phonenumber: phoneNumber,
      password: password,
    };
    props.login(dataLogin);
    actionMain.loading(true);
  };
  useEffect(() => {
    !token && props.navigation.navigate('Login');
    token && isStudent && props.navigation.navigate('HomeStudent');
    token && !isStudent && props.navigation.navigate('HomeTeacher');
  }, [token, isStudent]);
  return (
    <ImageBackground
      source={require('../assets/images/image5.jpg')}
      style={{height: '100%', width: '100%'}}>
      <View style={styles.MainContainer}>
        <Text style={styles.Title}>Login</Text>
        <Hoshi
          labelStyle={styles.LabelStyle}
          style={styles.TextInput}
          label={'Tài khoản'}
          // this is used as active border color
          borderColor={'#22B1F0'}
          // active border height
          borderHeight={1}
          value={phoneNumber}
          onChangeText={onChangePhone}
          inputPadding={16}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
        />
        <Hoshi
          labelStyle={styles.LabelStyle}
          secureTextEntry={true}
          style={styles.TextInput}
          label={'Mật khẩu'}
          onChangeText={onChangePass}
          // this is used as active border color
          borderColor={'#22B1F0'}
          // active border height
          borderHeight={1}
          value={password}
          inputPadding={16}
          // this is used to set backgroundColor of label mask.
          // please pass the backgroundColor of your TextInput container.
        />
        <ButtonCustom
          title={'Đăng nhập'}
          style={styles.Down2}
          onPress={login}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Title: {
    fontFamily: 'roboto-slab-bold',
    fontSize: wp('10'),
    alignSelf: 'center',
    color: '#22B1F0',
    marginTop: hp('10'),
  },

  Down2: {
    alignItems: 'center',
    marginTop: hp('4'),
  },
  TextInput: {
    width: wp('80'),
    marginTop: hp('2'),
  },
  LabelStyle: {
    color: '#22B1F0',
    fontFamily: 'roboto-slab-regular',
  },
});
const mapStateFromProps = (state: any) => {
  return {
    token: state.systems.token,
    messageLogin: state.systems.messageLogin,
    isStudent: state.systems.isStudent,
  };
};
export default connect(mapStateFromProps, {...system})(Login);
