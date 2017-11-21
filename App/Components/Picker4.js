import React, { Component } from 'react';
import { View, StyleSheet, Picker } from 'react-native';


export default class App extends Component {
  
  state = {
    valueSelected: 'select'
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
                <Picker.Item label='select' value='select'/>
                <Picker.Item label='30' value='30'/>
                <Picker.Item label='40' value='40'/>
                <Picker.Item label='50' value='50'/>
                <Picker.Item label='60' value='60'/>
                <Picker.Item label='70' value='70'/>
                <Picker.Item label='80' value='80'/>
                <Picker.Item label='90' value='90'/>
                <Picker.Item label='100' value='100'/>
                <Picker.Item label='110' value='110'/>
                <Picker.Item label='120' value='120'/>
                



             
                
                
                
               
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
    width:200,
    borderWidth: 2,
    marginTop: 50,
    justifyContent: 'center'
  },
});

