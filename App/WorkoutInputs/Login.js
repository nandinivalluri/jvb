import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class Login extends Component {
	render() {
		return(
             <View style={styles.container}>
                 <TextInput
                     placeholder="username or email"
                     style={styles.input}
                    />
                  <TextInput
                     placeholder="password"
                     style={styles.input}
                    />   

             </View>
			)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
		justifyContent: 'center',
		alignItems: 'center',
		height: 50

		
	},
	input: {	
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		color: '#FFF',
		
		
	}
});




