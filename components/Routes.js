import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';

import StyleSheet from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createAppContainer} from 'react-navigation';

const NavStack = createStackNavigator(
  {
    Blogs: {
      screen: Blogs,
      navigationOptions: () => ({
        headerTitle: 'Our Blogs',
        // headerTintColor: 'red',
      }),
    },
    Edit: {
      screen: Edit,
      navigationOptions: () => ({
        headerTitle: 'Edit your text',
        // headerTintColor: 'red',
      }),
    },
  },
  {
    headerLayoutPreset: 'center',
  },
);

const BottomTab = createBottomTabNavigator({
  NavStack: {
    screen: NavStack,
  },
  Post: {
    screen: Post,
  },
});

export default Routes = createAppContainer(BottomTab);
