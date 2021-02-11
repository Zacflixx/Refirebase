import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createAppContainer} from 'react-navigation';

const NavStack = createStackNavigator({
  Blogs: {
    screen: Blogs,
  },
  Edit: {
    screen: Edit,
  },
});

const BottomTab = createBottomTabNavigator({
  NavStack: {
    screen: NavStack,
  },
  Post: {
    screen: Post,
  },
});

export default Routes = createAppContainer(BottomTab);
