import React from 'react';
import { Image, StyleSheet, Text, ScrollView, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import LightButton from '../UI/buttons/LightButton';
import DarkButton from '../UI/buttons/DarkButton';
import FullStarIcon from '../UI/icons/Full-star-icon';
import LongText from '../UI/typo-graphy/LongText';
import AppText from '../UI/typo-graphy/AppText';
import TeacherOverView from '../teacher/TeacherOverView';

const CourseList = (props) => {
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <Image style={styles.cardImage} source={{ uri: props.imageURL }} />
        <AppText style={styles.cardTitle}>{props.title}</AppText>
        <AppText style={styles.description}>{props.description}</AppText>
        <View style={styles.bestSellerContainer}>
          <Text>Best Seller</Text>
        </View>
        <View style={styles.authorContainer}>
          <View style={styles.starContainer}>
            <AppText style={styles.rating}>{props.ratings}</AppText>
            <FullStarIcon />
            <FullStarIcon />
            <FullStarIcon />
            <FullStarIcon />
            <FontAwesome name='star-half-full' size={18} color='#ffc93c' />
          </View>

          <AppText>
            {`(${props.totalRatings} ratings) ${props.totalStudent} students`}
          </AppText>

          <AppText>
            Created by <AppText style={styles.author}>@{props.author}</AppText>
          </AppText>
        </View>
        <View style={styles.priceAndButtonContainer}>
          <AppText style={styles.price}>${props.price.toFixed(2)}</AppText>
          <View style={styles.durkButton}>
            <DarkButton
              title='Buy now'
              onPress={() => console.log('Buy now Pressed')}
            />
          </View>

          <View style={styles.buttonGroup}>
            <LightButton
              title='Add To Cart'
              onpress={() => console.log('Buy now Pressed')}
            />
            <LightButton
              title='Add To Wishlist'
              onpress={() => console.log('Buy now Pressed')}
            />
          </View>
        </View>
        <LongText title='Description' longDescription={props.longDescription} />
        <TeacherOverView author={props.author} />
      </View>
    </ScrollView>
  );
};

export default CourseList;

const styles = StyleSheet.create({
  author: {
    color: '#0a81ab',
  },
  bestSellerContainer: {
    backgroundColor: '#ffc93c',
    width: 80,
    height: 30,
    marginVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardContainer: {
    width: 350,
    margin: 13,
    overflow: 'hidden',
    marginTop: 25,
    justifyContent: 'center',
  },
  cardPrise: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardImage: {
    width: '95%',
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 5,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  description: {
    fontSize: 16,
    lineHeight: 23,
    fontWeight: '300',
    color: '#2e2d2d',
  },
  durkButton: {
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: -10,
  },
  price: {
    fontSize: 26,
    position: 'relative',
    left: -120,
    marginBottom: 20,
    marginVertical: 10,
    fontWeight: '700',
  },
  priceAndButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },

  rating: {
    color: '#000',
    marginRight: 8,
  },
});
