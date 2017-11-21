import React from 'react';
import { View, TextInput } from 'react-native';


export default class Input2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Select'}
  }
 
  render() {
    return (
        <View>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 320, marginTop: 20, alignItems: 'center' }}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />  
        </View>
    );
  }
}
