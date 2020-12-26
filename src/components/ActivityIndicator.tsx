import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {DotIndicator} from 'react-native-indicators';
import {connect} from 'react-redux';
import ModalCustom from 'react-native-modal';
const ActivityIndicator = (props: any) => {
  return (
    <ModalCustom
      isVisible={props.loading}
      style={styles.MainContainer}
      backdropOpacity={0.7}>
      <DotIndicator color={'#22B1F0'} />
    </ModalCustom>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapStateFromProps = (state: any) => {
  return {
    loading: state.systems.loading,
  };
};
export default connect(mapStateFromProps, null)(ActivityIndicator);
