import Login from './Login';
import Blogs from './Blogs';
import Post from './Post';
import Edit from './Edit';

import {
  StyleSheet,
  backgroundColor,
  ImageBackground,
  ImageStyle,
  Image,
  image,
} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import {createAppContainer} from 'react-navigation';

// const NavStack1 = createStackNavigator({
//   Login: {
//     screen: Login,
//     navigationOptions: () => ({
//       headerTitle: 'Login in this screen',
//       // headerShown: false,
//     }),
//   },
//   Blogs: {
//     screen: Blogs,
//     navigationOptions: {
//       headerShown: false,

//       cardStyle: {
//         shadowColor: 'transparent',
//         backgroundColor: 'transparent',
//       },
//       transparentCard: true,
//       transitionConfig: () => ({
//         containerStyle: {
//           backgroundColor: 'transparent',
//         },
//       }),
//     },
//   },

//   Edit: {
//     screen: Edit,
//     navigationOptions: () => ({
//       headerTitle: 'Edit your text',
//       headerShown: false,
//     }),
//   },
// });

// const BottomTab1 = createBottomTabNavigator({
//   NavStack1: {
//     screen: NavStack1,
//   },
// });

// const NavStack = createStackNavigator({
//   Login: {
//     screen: Login,
//     // navigationOptions: () => ({
//     //   headerTitle: 'Login in this screen',
//     // headerShown: false,
//   },
// });
const NavStack = createStackNavigator({
  Blogs: {
    screen: Blogs,
    navigationOptions: {
      headerShown: false,

      cardStyle: {
        shadowColor: 'transparent',
        backgroundColor: 'transparent',
      },
      transparentCard: true,
      transitionConfig: () => ({
        containerStyle: {
          backgroundColor: 'transparent',
        },
      }),
    },
  },

  Edit: {
    screen: Edit,
    navigationOptions: () => ({
      headerTitle: 'Edit your text',
      headerShown: false,
    }),
  },
});

const BottomTab = createBottomTabNavigator({
  NavStack: {
    screen: NavStack,
  },
  Post: {
    screen: Post,
  },
  // NavStack2: {
  //   screen: NavStack2,
  // },
});

export default Routes1 = createAppContainer(BottomTab);
