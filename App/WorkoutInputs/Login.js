import React from 'react';
import { Text, View, Button } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'; // 0.18.4
import * as firebase from 'firebase'; // 4.6.2
import Input from './Input';


import "@expo/vector-icons"; // 6.2.0

firebase.initializeApp({
  apiKey: "AIzaSyB7XcvCKr0bU3dLN5Hckkczf5xgil3Tbo8",
    authDomain: "login-6e7c5.firebaseapp.com",
    databaseURL: "https://login-6e7c5.firebaseio.com",
    projectId: "login-6e7c5",
    storageBucket: "login-6e7c5.appspot.com",
    messagingSenderId: "687760434968"
});

export default class Login extends React.Component{
	static navigationOptions = {
		title: Login,
	};
  constructor(props) {
    super(props);
    this.state = {email:'', password:'', error:'', loading:false};
  }
  
  onLoginPress(){
    this.setState({error:'', loading:true});
    
    const{email,password} = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      this.state({error:'',loading:false});
      this.props.navigation.navigate("Input");
      
    })
    .catch(() => {
      this.setState({error:'Authentication Failed',loading:false});
    })
  }
  
  
  
  renderButtonOrLoading(){
    if(this.state.loading){
      return <Text> Loading </Text>
    }
    return <View>
      <Button
      onPress={this.onLoginPress.bind(this)} title='Login'/>
      
  </View>   
      
  }
  render(){
    return(
      <View>
         <FormLabel>Email</FormLabel>
         <FormInput 
             value = {this.state.email}
             onChangeText={email => this.setState({email})} 
            />
          <FormLabel>Password</FormLabel>
          <FormInput 
             value = {this.state.password}
             secureTextEntry
             placeholder='**********'
             onChangeText={password => this.setState({password})} 
            />
          {this.renderButtonOrLoading()}
         
      </View>   
      )
  }
}
