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
                <Picker.Item label='5' value='5'/>
                <Picker.Item label='10' value='10'/>
                <Picker.Item label='15' value='15'/>
                <Picker.Item label='20' value='20'/>
                <Picker.Item label='25' value='25'/>
                <Picker.Item label='30' value='30'/>
                <Picker.Item label='35' value='35'/>
                <Picker.Item label='40' value='40'/>
                <Picker.Item label='45' value='45'/>
                <Picker.Item label='50' value='50'/>
                <Picker.Item label='55' value='55'/>
                <Picker.Item label='60' value='60'/>
                <Picker.Item label='65' value='65'/>
                <Picker.Item label='70' value='70'/>
                <Picker.Item label='75' value='75'/>
                <Picker.Item label='80' value='80'/>
                <Picker.Item label='85' value='85'/>
                <Picker.Item label='90' value='90'/>
                <Picker.Item label='95' value='95'/>
                <Picker.Item label='100' value='100'/>
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
    justifyContent: 'center'
  },
});
