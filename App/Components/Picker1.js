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
                <Picker.Item label='0' value='0'/>
                <Picker.Item label='0.5' value='0.5'/>
                <Picker.Item label='1' value='1'/>
                <Picker.Item label='1.5' value='1.5'/>
                <Picker.Item label='2' value='2'/>
                <Picker.Item label='2.5' value='2.5'/>
                <Picker.Item label='3' value='3'/>
                <Picker.Item label='3.5' value='3.5'/>
                <Picker.Item label='4' value='4'/>
                <Picker.Item label='4.5' value='4.5'/>
                <Picker.Item label='5' value='5'/>
                <Picker.Item label='5.5' value='5.5'/>
                <Picker.Item label='6' value='6'/>
                <Picker.Item label='6.5' value='6.5'/>
                <Picker.Item label='7' value='7'/>
                <Picker.Item label='7.5' value='7.5'/>
                <Picker.Item label='8' value='8'/>
                <Picker.Item label='8.5' value='8.5'/>
                <Picker.Item label='9' value='9'/>
                <Picker.Item label='9.5' value='9.5'/>
                <Picker.Item label='10' value='10'/>
                <Picker.Item label='10.5' value='10.5'/>
                <Picker.Item label='11' value='11'/>
                <Picker.Item label='11.5' value='11.5'/>
                <Picker.Item label='12' value='12'/>
                <Picker.Item label='12.5' value='12.5'/>
                <Picker.Item label='13' value='13'/>
                <Picker.Item label='13.5' value='13.5'/>
                <Picker.Item label='14' value='14'/>
                <Picker.Item label='14.5' value='14.5'/>
                <Picker.Item label='15' value='15'/>
                <Picker.Item label='15.5' value='15.5'/>
                <Picker.Item label='16' value='16'/>
                <Picker.Item label='16.5' value='16.5'/>
                <Picker.Item label='17' value='17'/>
                <Picker.Item label='17.5' value='17.5'/>
                <Picker.Item label='18' value='18'/>
                <Picker.Item label='18.5' value='18.5'/>
                <Picker.Item label='19' value='19'/>
                <Picker.Item label='19.5' value='19.5'/>
                <Picker.Item label='20' value='20'/>
                <Picker.Item label='More Than 20' value='More Than 20'/>

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
