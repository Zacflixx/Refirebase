import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Login from './components/Login';

export class App extends Component<Props> {
  render() {
    return (
      <View style={Styles.container}>
        <Login />
        {/* <Button color="red" title="sign in as zac" onPress={this.createUser} />
        <Button title="Logoff" onPress={this.Logoff} /> */}
        {/* <PhoneSignIn /> */}
        {/* <GoogleSigninButton
          style={{width: 198, height: 48}}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() =>
            this.onGoogleButtonPress().then(() =>
              console.log('Signed in with Google!'),
            )
          }
        /> */}
        {/* <Button
          title="Facebook Sign-In"
          onPress={() =>
            this.onFacebookButtonPress().then(() =>
              console.log('Signed in with Facebook!'),
            )
          }
        /> */}
      </View>
    );
  }
}

export default App;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// class App extends Component {
//   render() {
//     const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

//     return (
//       <Provider store={state}>
//         <Routes />
//       </Provider>
//     );
//   }
// }
// export default App;
