import React, {useState} from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Arrow} from '../../components';
import shadow from '../../utils/shadow';
export const Schedule = (props: any) => {
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
        data={item.subjects}
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
          style={index == 8 ? {borderBottomWidth: 1} : undefined}
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
      <View style={styles.viewFlatList}>
        <FlatList
          keyExtractor={(item, index) => `${index}`}
          data={dataDummy}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={dataDummy}
          renderItem={renderChildItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
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
    fontSize: wp(3.8),
    backgroundColor: '#22B1F0',
    fontFamily: 'roboto-slab-bold',
    color: '#fff',
    width: wp(15),
    textAlign: 'center',
    paddingVertical: wp(2),
    borderTopWidth: 1,
    borderColor: '#000',
    borderRightWidth: 1,
  },
  viewFlatList: {
    alignItems: 'center',
    marginTop: hp('2'),
  },
  squareChildItem: {
    fontSize: wp(3.8),
    fontFamily: 'roboto-slab-regular',
    color: '#000',
    width: wp(15),
    paddingVertical: wp(2),
    textAlign: 'center',
    borderTopWidth: 1,
    borderColor: '#000',
    borderRightWidth: 1,
    borderLeftWidth: 1,
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
