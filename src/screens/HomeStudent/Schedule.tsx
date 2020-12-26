import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {} from '../../components';
export const Schedule = (props: any) => {
  return (
    <View style={styles.MainContainer}>
      <Text>Schedule</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
});
