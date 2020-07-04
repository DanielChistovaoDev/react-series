import React from 'react';
import { View, TextInput, StyleSheet, Button, ActivityIndicator, Text } from 'react-native';
import FormRow from '../components/FormRow';
import firebase from 'firebase';
import { MessagesComponent } from '../components/messagesComponent';
import { AntDesign } from '@expo/vector-icons'; 

export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
            email: '',
            password: '',
            isLoading: false,
            message: null,
            error: false
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

        this.setState({isLoading: true, 
                       message: null,
                       error: false});

        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password).then( user => {

            this.setState({ 
                            message: 'auth/success',
                            user: user,
                            error: false
                         });

        }).catch( error => {

            this.setState({ message: error.code, error: true });

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
        const {error, message} = this.state;

        if (!error && !message)
            return null;
        
        return (
            <View>
                <MessagesComponent messageStatus={ this.state}></MessagesComponent>
            </View>
        );
        

    }

    createNewUser() {
        this.setState({isLoading: true, 
            message: null,
            error: false});

        const { email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword(email, password).then(newUser => {
            this.setState({ 
                message: 'auth/createSuccess',
                user: newUser,
                error: false
             });

        }
        ).catch( error => {
            console.log('error.message', error.message);
            console.log('error.code', error.code);
            
            this.setState({ message: error.code, error: true });

        }).then( ()=> { this.setState({isLoading: false}); });
    }

    renderNewUser() {
        if ( !this.state.isLoading)
        return (
            <View>
                <View style={styles.containerNewUser}>
                
                    <AntDesign name="adduser" style={styles.iconNewUser} size={50} color="black" />
                    <Text style={styles.iconNewUser}> Ainda não é cadastrado ? </Text>
                    <Text style={styles.iconNewUser}>  Digite seu e-mail e uma senha e 
                                <Text style={styles.cliqueAquiNewUser} 
                                onPress={()=> {this.createNewUser()  }}> clique aqui </Text>
                                 para criar um novo usuário
                    </Text>
                </View>
            </View>
        );
    }

    render () {
        return (
            <View>
                { this.renderMessage() }
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

                    { this.renderNewUser() }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10
    },
    containerNewUser: {
        padding: 50
    },
    iconNewUser: {
        textAlign: 'center'
    },
    cliqueAquiNewUser: {
        color: '#0096c7',
        fontWeight: 'bold',
        fontSize: 15
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
