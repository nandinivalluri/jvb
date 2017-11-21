import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import RadioButton from 'radio-button-react-native'; // 1.1.6
class Example1 extends Component {
  constructor (props){
     super(props)
       this.state = {
            value: -1,
            showSubQues: false,
           
        }

    
  }
  toggleSubQues(bool,val) {
    this.setState({
      showSubQues:bool,
      value:val
    });
  }
 
  
 render(){
     return(
        <View>
          <View style = {styles.container}>
               <RadioButton currentValue={this.state.value} value={0} onPress={this.toggleSubQues.bind(this,true,0)}>
                <Text>yes</Text>
                 </RadioButton>
                      
                 <RadioButton currentValue={this.state.value} value={1} onPress={this.toggleSubQues.bind(this,false,1)}>
                 <Text>no</Text>
                 </RadioButton>
                 
                 <RadioButton currentValue={this.state.value} value={2} onPress={this.toggleSubQues.bind(this,false,2)}>
                 <Text>not yet</Text>
               </RadioButton>
          </View>
          {this.state.showSubQues && <Hiddentext3/>}
        </View>   
      );
    }    
} 

class Hiddentext3 extends Component {

  constructor(props) {
    super(props);
    this.state = { text: 'Select'}
  }
  
  render() {
    return( 
     <View>
       <Text> 4.1 What Did You Take? </Text>
         <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 320, marginTop: 20, alignItems: 'center' }}
           onChangeText={(text) => this.setState({text})}
           value={this.state.text}
          /> 
      </View>    
    )
  }
}





const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }

})

export default Example1;
