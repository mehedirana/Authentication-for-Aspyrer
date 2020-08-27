
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from "firebase";

class SignUpScreen extends Component {

  state ={
    email: "",
    password:"",
    name: "",
    birthday: "",
    err: null
  };

  handleLogin =()=>{
    const {email, password} = this.state;

    firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(err => this.setState(err))
    console.log(this.state.err);


  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
        <View>
            <Text style={styles.inputTitle}>FULL NAME</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={name =>{this.setState({name})}}
              value ={this.state.name}
            />
          </View>
          <View>
            <Text style={styles.inputTitle}>email</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={email =>{this.setState({email})}}
              value ={this.state.email}
            />
          </View>
          <View>
            <Text style={styles.inputTitle}>password</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              autoCapitalize="none"
              onChangeText={password=>{this.setState({password})}}
              value={this.state.password}
            />
          </View>
          <View>
            <Text style={styles.inputTitle}>BIRTHDAY</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              onChangeText={birthday =>{this.setState({birthday})}}
              value ={this.state.birthday}
            />
          </View>

        </View>

        <View style={{ margin:30, flexDirection:"column",}}>
        

          <TouchableOpacity style={styles.button1}>
            <Text style={{color:"#FFFFFF", fontWeight:"bold"}}
            onPress={()=> this.props.navigation.navigate('SignUp')}
            >CREATE</Text>
          </TouchableOpacity>

          <View style={{flexDirection:'row', marginLeft:40}}>
            <Text style={{color:"#8A8F9E", marginTop:10, alignSelf:"center", }}>ALREADY HAVE AN ACCOUNT?</Text>

            <TouchableOpacity onPress={()=> this.props.navigation.navigate('Home')}>
            <Text style={{color:"#8A8F9E", fontWeight:"bold",marginTop:10, marginLeft:30}}
            
            >SIGN IN</Text>
          </TouchableOpacity>

            </View>

          

        </View>

      </View>
    );
  }
}
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  form: {
    marginTop: 80,
    marginBottom: 48,
    marginHorizontal: 30
  },
  input: {
    borderBottomColor: "#8A8F9E",
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: "#161F3D"

  },
  inputTitle: {
    color: "#8A8F9E",
    fontSize: 10,
    textTransform: "uppercase"
  },
  button: {
    marginHorizontal: 20,
    backgroundColor: "#00ced0",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center"

  },
  button1: {
    marginTop:10,
    marginHorizontal: 20,
    backgroundColor: "#00ced0",
    borderRadius: 30,
    height: 52,
    alignItems: "center",
    justifyContent: "center"

  }
});
