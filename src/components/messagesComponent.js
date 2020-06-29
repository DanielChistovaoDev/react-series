import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Messages from '../util/messages';

export class MessagesComponent extends React.Component {

    constructor(props){
        super(props);

        const { messageStatus }  = props;

        this.state = {
            message: messageStatus.message,
            error: messageStatus.error
        };
    }

    render() {
        console.log('props->', this.props);

        if ( this.state.message.includes('auth')) {

                return (
                    <View style={ [ styles.container,
                                    this.state.error ? styles.containerErrorMessage : styles.containerSuccessMessage
                                    ]}>
                        <Text >
                            <AntDesign name={  this.state.error ? 'exclamationcircleo' : 'checkcircle'} 
                                       style={ styles.icon }  />

                            <Text style={styles.message}> {  
                                                       this.state.error ? Messages.loginErrorMessage(this.state.message) : Messages.loginSuccessMessage()
                                                } 
                            </Text>    
                        </Text> 
                    </View>
                );

        }


    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    containerSuccessMessage: {
        backgroundColor: 'green'
    },
    containerErrorMessage: {
        backgroundColor: 'red'
    },
    icon: {
      fontSize: 20,
      color: 'white',
      alignSelf: 'center',
      marginBottom: 10
    },
    message: {
     color: 'white',
     alignSelf: 'center',
     fontSize: 16
   },

 });