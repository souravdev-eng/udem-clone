import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CardList from '../components/Feacherd/CardList';
import CourseDetailsScreen from '../screens/course/CourseDetailsScreen';

const FeacheredNavigator = createStackNavigator(
  {
    Home: CardList,
    CourseDetails: CourseDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStatusBarHeight: 29,
      title: '',
    },
  }
);

export default createAppContainer(FeacheredNavigator);
