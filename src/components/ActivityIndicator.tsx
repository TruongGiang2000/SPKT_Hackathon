import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {PacmanIndicator} from 'react-native-indicators';
export const ActivityIndicator = (props: any) => {
  return <View style={styles.MainContainer}></View>;
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
