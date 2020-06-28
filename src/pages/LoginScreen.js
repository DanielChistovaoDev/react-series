import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import FormRow from '../components/FormRow';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    onChangeInput(field, value) {
        this.setState({ [field]: value});
    }

    tryLogin() {
        console.log('state ->', this.state);
        
    }

    render () {
        return (
            <View style={styles.container}>
                <FormRow first>
                    <TextInput 
                        style={styles.input}
                        placeholder='email/user'
                        value={this.state.email}
                        onChangeText={value => this.onChangeInput('email', value) } />
                </FormRow>
                
                <FormRow last>
                    <TextInput  
                        style={styles.input}
                        placeholder='password'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={value => this.onChangeInput('password', value) }/>
                </FormRow>

                        <Button 
                            title='ENTRAR'
                            onPress={ () => this.tryLogin()}
                            />


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    input: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingBottom: 10
    },
    button: {
        marginTop: 5
    }
});
