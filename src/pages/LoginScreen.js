import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

    }

    componentDidMount() {
        // Initialize Firebase
        var firebaseConfig = {
            apiKey: "AIzaSyCMkRLvSphvImf_q5rca2W5s1ardEu-3HA",
            authDomain: "series-417cc.firebaseapp.com",
            databaseURL: "https://series-417cc.firebaseio.com",
            projectId: "series-417cc",
            storageBucket: "series-417cc.appspot.com",
            messagingSenderId: "619647943574",
            appId: "1:619647943574:web:16e75538632b2c145053b7",
            measurementId: "G-B9EG28VNG4"
          };

          firebase.initializeApp(firebaseConfig);

    }

    onChangeInput(field, value) {
        this.setState({ [field]: value});
    }

    tryLogin() {
        console.log('state ->', this.state);

        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).then( user => {

          console.log('====================================');
          console.log('Usuário autenticado ->', user);
          console.log('====================================');
        }).catch( error => {
          console.log('error ao logar ->', error);
          
        });
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
