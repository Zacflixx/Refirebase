import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import auth from '@react-native-firebase/auth';
import {useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';

import Routes from '../components/Routes';

function LoginAuth() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <View>
        <Text>Login Now</Text>
        <Button title="Now" />
      </View>
    );
  }
  const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    // <View>
    <Text>Welcome {user.email}</Text>
    // <Provider store={state}>
    //   <Routes />
    // </Provider>
    // </View>
  );
}

export default class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username: '',
  //     password: '',
  //     isLoading: false,
  //   };
  // }
  createUser = () => {
    auth()
      .signInWithEmailAndPassword('zac@example.com', 'pppppppp')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  Logoff = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };
  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <LoginAuth />
          <Image
            style={{width: 350, height: 80, marginBottom: 30}}
            source={require('./assets/logo.png')}
          />

          <TextInput
            name="username"
            // value={this.state.username}
            style={styles.inputStyle}
            placeholderTextColor="#fff"
            placeholder="UserName"
            // onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            secureTextEntry={true}
            style={styles.inputStyle}
            placeholderTextColor="#fff"
            placeholder="Password"
            // onChangeText={(password) => this.setState({password})}
          />

          <TouchableOpacity style={styles.containerButton}>
            <Button
              icon="arrow-right-bold-circle-outline"
              color="black"
              style={styles.Button}
              onPress={this.createUser}
              title="Login"></Button>
          </TouchableOpacity>
          <Button
            icon="arrow-right-bold-circle-outline"
            color="black"
            style={styles.Button}
            onPress={this.Logoff}
            title="Logout"></Button>
        </View>
      </ImageBackground>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  inputStyle: {
    marginTop: 20,
    height: 40,
    paddingLeft: 10,
    borderColor: '#fff',
    color: 'white',
    borderWidth: 1,
    borderRadius: 8,
    width: '60%',
    textAlign: 'left',
  },

  containerButton: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'flex-start',
  },
  Button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F035E0',
    textAlign: 'center',
    height: 40,
    borderRadius: 5,
    zIndex: 100,
  },
});
