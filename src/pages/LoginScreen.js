import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {
    render () {
        return (
            <View>
                <FormRow>
                    <TextInput 
                        style={styles.input}
                        placeholder='email/user'/>
                </FormRow>
                
                <FormRow>
                    <TextInput  
                        style={styles.input}
                        placeholder='password'
                        secureTextEntry={true} />
                </FormRow>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10
    }
});
