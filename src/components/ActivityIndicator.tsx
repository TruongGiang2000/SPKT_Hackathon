import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PacmanIndicator} from 'react-native-indicators';
import ModalCustom from 'react-native-modals';
export const ActivityIndicator = (props: any) => {
  return <ModalCustom style={styles.MainContainer}></ModalCustom>;
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
