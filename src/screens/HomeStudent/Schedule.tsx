import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Arrow} from '../../components';
import shadow from '../../utils/shadow';
import {connect} from 'react-redux';
import {system} from '../../redux';
const Schedule = (props: any) => {
  const {userInfo, schedule} = props;
  const dataDummy = [
    {
      date: '',
      id: '',
      subjects: [
        'Toán',
        'Lý',
        'Hoá',
        'Sinh',
        'Toán',
        'Sinh',
        'Lý',
        'Công nghệ',
        'Địa lý',
      ],
    },
    {
      date: '',
      id: '',
      subjects: [
        'Toán',
        'Lý',
        'Hoá',
        'Sinh',
        'Toán',
        'Sinh',
        'Lý',
        'Công nghệ',
        'Địa lý',
      ],
    },
    {
      date: '',
      id: '',
      subjects: [
        'Toán',
        'Lý',
        'Hoá',
        'Sinh',
        'Toán',
        'Sinh',
        'Lý',
        'Công nghệ',
        'Địa lý',
      ],
    },
    {
      date: '',
      id: '',
      subjects: [
        'Toán',
        'Lý',
        'Hoá',
        'Sinh',
        'Toán',
        'Sinh',
        'Lý',
        'Công nghệ',
        'Địa lý',
      ],
    },
    {
      date: '',
      id: '',
      subjects: [
        'Toán',
        'Lý',
        'Hoá',
        'Sinh',
        'Toán',
        'Sinh',
        'Lý',
        'Công nghệ',
        'Địa lý',
      ],
    },
    {
      date: '',
      id: '',
      subjects: [
        'Toán',
        'Lý',
        'Hoá',
        'Sinh',
        'Toán',
        'Sinh',
        'Lý',
        'Công nghệ',
        'Địa lý',
      ],
    },
  ];
  React.useEffect(() => {
    props.getSchedule({id: userInfo?.classes?.id});
  }, []);
  const renderItem = ({item, index}) => {
    const isFirst = index == 0;
    return (
      <SquareItem
        day={index + 2}
        style={isFirst ? {borderLeftWidth: 1} : undefined}
      />
    );
  };
  const renderChildItem = ({item, index}) => {
    return (
      <FlatList
        data={item.subject}
        renderItem={renderItemSubject}
        keyExtractor={(item, index) => `${index}`}
      />
    );
  };
  const renderItemSubject = ({item, index}) => {
    const isAfternoon = index == 4;
    return (
      <>
        <SquareChildItem
          name={item.toString()}
          style={index == 9 ? {borderBottomWidth: 1} : undefined}
        />
        {isAfternoon && (
          <Text
            style={[
              styles.squareChildItem,
              {fontFamily: 'roboto-slab-bold', color: '#22B1F0'},
            ]}>
            Chiều
          </Text>
        )}
      </>
    );
  };

  return (
    <View style={styles.MainContainer}>
      <Arrow
        title={'Thời khoá biểu'}
        onPress={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.viewFlatList}>
          <FlatList
            keyExtractor={(item, index) => `${index}`}
            data={schedule}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          <FlatList
            data={schedule}
            renderItem={renderChildItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  squareItem: {
    fontSize: wp(3),
    backgroundColor: '#22B1F0',
    fontFamily: 'roboto-slab-bold',
    color: '#fff',
    width: wp(15),
    textAlign: 'center',
    padding: wp(2),
    borderTopWidth: 1,
    borderColor: '#000',
    borderRightWidth: 1,
    textAlignVertical: 'center',
  },
  viewFlatList: {
    alignItems: 'center',
    marginTop: hp('2'),
  },
  squareChildItem: {
    fontSize: wp(3),
    fontFamily: 'roboto-slab-regular',
    color: '#000',
    width: wp(15),
    padding: wp(1),
    textAlign: 'center',
    borderTopWidth: 1,
    borderColor: '#000',
    borderRightWidth: 1,
    borderLeftWidth: 1,
    height: hp(10),
    textAlignVertical: 'center',
  },
});
const SquareItem = (props: any) => {
  const {day, style} = props;
  return <Text style={[styles.squareItem, style]}>{`Thứ ${day}`}</Text>;
};
const SquareChildItem = (props: any) => {
  const {name, style} = props;
  return <Text style={[styles.squareChildItem, style]}>{name}</Text>;
};
const mapStateFromProps = (state: any) => {
  return {
    userInfo: state.systems.userInfo,
    schedule: state.systems.schedule,
  };
};
export default connect(mapStateFromProps, {...system})(Schedule);
