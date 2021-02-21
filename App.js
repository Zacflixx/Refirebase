import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Routes1 from './components/Routes1';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import Login from './components/Login';
class App extends Component {
  render() {
    const state = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={state}>
        <Routes1 />
      </Provider>
    );
  }
}
export default App;

// import Login from './components/Login';

// export class App extends Component<Props> {
//   render() {
//     return (
//       <View style={Styles.container}>
//         <Login />
//         {/* <Button color="red" title="sign in as zac" onPress={this.createUser} />
//         <Button title="Logoff" onPress={this.Logoff} /> */}
//         {/* <PhoneSignIn /> */}
//         {/* <GoogleSigninButton
//           style={{width: 198, height: 48}}
//           size={GoogleSigninButton.Size.Wide}
//           color={GoogleSigninButton.Color.Dark}
//           onPress={() =>
//             this.onGoogleButtonPress().then(() =>
//               console.log('Signed in with Google!'),
//             )
//           }
//         /> */}
//         {/* <Button
//           title="Facebook Sign-In"
//           onPress={() =>
//             this.onFacebookButtonPress().then(() =>
//               console.log('Signed in with Facebook!'),
//             )
//           }
//         /> */}
//       </View>
//     );
//   }
// }

// export default App;

// const Styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//   },
// });
