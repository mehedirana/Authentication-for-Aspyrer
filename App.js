import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./screens/SignInScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBI6Wrmh8JBegVQFXCUjgJ5lUrUhoXy_Nc",
  authDomain: "aspyrer-aea82.firebaseapp.com",
  databaseURL: "https://aspyrer-aea82.firebaseio.com",
  projectId: "aspyrer-aea82",
  storageBucket: "aspyrer-aea82.appspot.com",
  messagingSenderId: "383958588869",
  appId: "1:383958588869:web:42eff37566b397b6aaffac",
};
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default App;
