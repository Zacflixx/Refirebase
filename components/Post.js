import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
  backgroundColor,
  Image,
  TouchableOpacity,
} from 'react-native';
import {postBlogs} from '../actions';
import {connect} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {useState, useEffect} from 'react';

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
      </View>
    );
  }
  // const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

  return (
    <Text>Welcome {user.email}</Text>

    // <Submit2 />
    // this.props.navigation.navigate('NavStack')
  );
}
class Post extends Component {
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
  state = {
    title: '',
    content: '',
  };
  submit2 = () => {
    this.props.navigation.navigate('Blogs');
  };
  render() {
    return (
      <ImageBackground
        source={require('./assets/bg.png')}
        style={{width: '100%', height: '100%'}}>
        <View style={Styles.container}>
          <LoginAuth />
          <Image
            style={{width: 350, height: 80, marginBottom: 30}}
            source={require('./assets/logo.png')}
          />

          <TextInput
            name="username"
            // value={this.state.username}
            style={Styles.inputStyle}
            placeholderTextColor="#fff"
            placeholder="UserName"
            // onChangeText={(username) => this.setState({username})}
          />
          <TextInput
            secureTextEntry={true}
            style={Styles.inputStyle}
            placeholderTextColor="#fff"
            placeholder="Password"
            // onChangeText={(password) => this.setState({password})}
          />

          <TouchableOpacity style={Styles.containerButton}>
            <Button
              icon="arrow-right-bold-circle-outline"
              color="black"
              style={Styles.Button}
              onPress={this.createUser}
              title="Login"></Button>
          </TouchableOpacity>
          <Button
            icon="arrow-right-bold-circle-outline"
            color="black"
            style={Styles.Button}
            onPress={this.Logoff}
            title="Logout"></Button>
        </View>
      </ImageBackground>
    );
  }
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
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

export default connect(null, {postBlogs})(Post);
