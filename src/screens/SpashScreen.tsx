import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DotIndicator} from 'react-native-indicators';
export const SplashScreen = (props: any) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     props.navigation.navigate('Login');
  //   }, 3000);
  // }, []);
  return (
    <ImageBackground
      source={require('../assets/images/image5.jpg')}
      style={{height: '100%', width: '100%'}}>
      <View style={styles.MainContainer}>
        <Image source={require('../assets/images/logoSS.png')} />
        <View style={styles.indicatorsView}>
          <DotIndicator color={'#22B1F0'} />
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
