import React from 'react';
import { FlatList } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CourseList from '../../components/Feacherd/CourseList';
import IconComponent from '../../components/UI/icons/IconComponent';

const CourseDetailsScreen = (props) => {
  const { course } = useSelector((state) => ({ ...state }));

  const courseId = props.navigation.getParam('courseId');

  const data = course.filter((el) => el._id === courseId);

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <CourseList
          title={item.title}
          imageURL={item.image}
          ratings={item.ratings}
          totalRatings={item.totalRatings}
          author={item.author}
          price={item.price}
          description={item.description}
          totalStudent={item.totalStudent}
          longDescription={item.longDescription}
          language={item.language}
        />
      )}
      keyExtractor={(item) => item._id}
    />
  );
};

CourseDetailsScreen.navigationOptions = (navData) => {
  return {
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={IconComponent}>
        <Item IconComponent={Entypo} iconName='share' color='#687980' />
        <Item
          IconComponent={Ionicons}
          iconName='cart-outline'
          color='#687980'
        />
      </HeaderButtons>
    ),
  };
};

export default CourseDetailsScreen;
