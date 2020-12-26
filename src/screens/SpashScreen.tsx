import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {connect} from 'react-redux';
import {DotIndicator} from 'react-native-indicators';
const SplashScreen = (props: any) => {
  const {token, isStudent} = props;
  useEffect(() => {
    console.log('token', token, isStudent);
    setTimeout(() => {
      // if (token && isStudent) {
      //   props.navigation.navigate('HomeStudent');
      // } else if (token && !isStudent) {
      //   props.navigation.navigate('HomeTeacher');
      // } else {
      //   props.navigation.navigate('Login');
      // }
      // }

      token && isStudent && props.navigation.navigate('HomeStudent');
      !token && props.navigation.navigate('Login');
    }, 5000);
  }, [token, isStudent]);

  return (
    <ImageBackground
      source={require('../assets/images/image5.jpg')}
      style={{height: '100%', width: '100%'}}>
      <View style={styles.MainContainer}>
        <Image source={require('../assets/images/logoSS.png')} />
        <View style={styles.indicatorsView}>
          <DotIndicator color={'#22B1F0'} size={wp(2)} />
        </View>
        <Text style={styles.titleSpash}>ONLINE EDUCATION</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleSpash: {
    fontFamily: 'roboto-slab-bold',
    color: '#22B1F0',
    position: 'absolute',
    fontSize: wp(5),
    bottom: hp(7),
  },
  indicatorsView: {
    height: hp(5),
    marginTop: hp(5),
    position: 'absolute',
    bottom: hp(1),
  },
});
const mapStateFromProps = (state: any) => {
  return {
    token: state.systems.token,
    isStudent: state.systems.isStudent,
  };
};
export default connect(mapStateFromProps, null)(SplashScreen);
