import React from 'react';
import { View, TextInput, StyleSheet, Button, ActivityIndicator, Text } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import Messages from '../util/messages';

export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            email: '',
            password: '',
            isLoading: false,
            message: ''
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

          if (!firebase.apps.length)
            firebase.initializeApp(firebaseConfig);

    }

    onChangeInput(field, value) {
        this.setState({ [field]: value});
    }

    tryLogin() {

        this.setState({isLoading: true, message: ''});

        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).then( user => {

            this.setState({ message: Messages.loginSuccessMessage(),
                            user: user
                         });

        }).catch( error => {

            this.setState({ message: Messages.loginErrorMessage(error.code) });

        }).then( ()=> { this.setState({isLoading: false}); });

    }

    renderButton() {

        if ( this.state.isLoading)
            return <ActivityIndicator />;

        return (
        <Button 
            title='ENTRAR'
            onPress={ () => this.tryLogin()}
        />)
    }

    renderMessage() {
        const {message} = this.state;

        if (!message)
            return null;
        
            return (
                <View>
                    <Text> {message} </Text>
                </View>
            );
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

                { this.renderButton() }

                { this.renderMessage() }

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
