import React, { Component } from 'react';
import { View, StyleSheet, Picker } from 'react-native';


export default class App extends Component {
  
  state = {
    valueSelected: 'I do not follow any specific diet'
  }
  
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.inputBox}>
             <Picker
                selectedValue={this.state.valueSelected}
                onValueChange={(itemValue) => {
                  this.setState({valueSelected: itemValue})
                }}
                enabled={true}
              >
                <Picker.Item label='I do not follow any specific diet' value='I do not follow any specific diet'/>
                <Picker.Item label='Other' value='Other'/>
                <Picker.Item label='High Carb' value='High Card'/>
                <Picker.Item label='Ketogenic Diet' value='Ketogenic Diet'/>
                <Picker.Item label='Low carb/High fat' value='Low carb/High fat'/>
                <Picker.Item label='Paleo' value='Paleo'/>
                <Picker.Item label='Vegan' value='Vegan'/>
                <Picker.Item label='Vegetarian' value='Vegetarian'/>
                <Picker.Item label='Whole Foods/Mostly Unprocessed' value='Whole Foods/Mostly Unprocessed'/>
                
              </Picker>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
 
  },
    inputBox: {
    height: 40,
    width:290,
    borderWidth: 2,
    marginTop: 50,
    justifyContent: 'center'
  },
});
