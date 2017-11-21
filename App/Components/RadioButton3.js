import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

import RadioButton from 'radio-button-react-native'; // 1.1.6
class Example3 extends Component {
  constructor (props){
     super(props)
       this.state = {
            value: 0,
            
           
        }

    
  }
 
 handleOnPress(value){
    this.setState({value:value})
 }
  
 render(){
     return(
        <View>
          <View style = {styles.container}>
               <RadioButton currentValue={this.state.value} value={0} onPress={this.handleOnPress.bind(this)}>
                <Text>Low</Text>
                 </RadioButton>
                      
                 <RadioButton currentValue={this.state.value} value={1} onPress={this.handleOnPress.bind(this)}>
                 <Text>Medium</Text>
                 </RadioButton>
                 
                 <RadioButton currentValue={this.state.value} value={2} onPress={this.handleOnPress.bind(this)}>
                 <Text>High</Text>
               </RadioButton>
          </View>
        </View>   
      );
    }    
} 

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
})  

export default Example3;