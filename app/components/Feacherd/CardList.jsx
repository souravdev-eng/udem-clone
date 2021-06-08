import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import axios from 'axios';

import { getAllCourse } from '../../api/featchCourse';
import Card from './Card';
import IconComponent from '../UI/icons/IconComponent';

const CardList = (props) => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    try {
      //! Make sure pass the my ustem IP address to the URL
      const { data } = await axios.get(
        `http://192.168.0.103:4000/api/v1/course`
      );
      dispatch({
        type: 'GET_ALL_COURSE',
        payload: data.data.course,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.cardDetails}>
        <Text style={styles.tag}>Web Develoment</Text>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              imageURL={item.image}
              price={item.price}
              ratings={item.ratings}
              ratingQty={item.totalRatings}
              author={item.author}
              longDescription={item.longDescription}
              viewDetails={() => {
                props.navigation.navigate('CourseDetails', {
                  courseId: item._id,
                });
              }}
            />
          )}
          keyExtractor={(item, index) => item._id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        <Text style={styles.tag}>Feacherd</Text>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              imageURL={item.image}
              price={item.price}
              ratings={item.ratings}
              ratingQty={item.totalRatings}
              author={item.author}
              viewDetails={() => {
                props.navigation.navigate('CourseDetails', {
                  courseId: item._id,
                });
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.tag}>Feacherd</Text>
        <FlatList
          data={course}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              imageURL={item.image}
              price={item.price}
              ratings={item.ratings}
              ratingQty={item.totalRatings}
              author={item.author}
              viewDetails={() => {
                props.navigation.navigate('CourseDetails', {
                  courseId: item._id,
                });
              }}
            />
          )}
          keyExtractor={(item, index) => item._id}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
      </View>
    </ScrollView>
  );
};

export default CardList;

CardList.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IconComponent}>
        <Item
          IconComponent={Ionicons}
          iconName='cart-outline'
          color='#535353'
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  tag: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 10,
    marginVertical: 10,
    color: '#000',
  },
  cardDetails: {
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
