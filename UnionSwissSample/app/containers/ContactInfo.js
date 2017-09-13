import React, { Component } from 'react';
import * as CustomButtons from '../components/Buttons';
import * as CustomInputs from '../components/TextInputs';
import styles from '../styles/styles';
import Images from '../const/images';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
    Animated,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class ContactInfo extends Component {
    static navigationOptions = {
        //title: 'Registration',
        headerTintColor: 'white',
        headerStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',

            //zindex: 100,
            top: 0,
            left: 0,
            right: 0
        }
    };

    constructor() {
        super();
        this.next = this.next.bind(this);
        this._navigateForward = this._navigateForward.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }}>
                <Image source={require('../resources/Background.png')} blurRadius={5} style={styles.container}>
                    <View style={styles.mainGrid}>
                        <View style={styles.inputFieldsBody} >
                            {CustomInputs.renderImageTextInput("First Name", require('../resources/F.png'), this.genericSubmit)}
                            {CustomInputs.renderImageTextInput("Last Name", require('../resources/L.png'), this.genericSubmit)}
                            {CustomInputs.renderImageTextInput("ID Number", require('../resources/edit.png'), this.genericSubmit)}
                            {CustomInputs.renderImageTextInput("Email Address", require('../resources/email.png'), this.genericSubmit)}
                            {CustomInputs.renderImageTextInput("Mobile Number", require('../resources/mobile.png'), this.genericSubmit)}
                        </View>
                        <View style={styles.registrationFooter}>
                            {CustomButtons.renderColoredButton("Next", this.next)}
                            {CustomButtons.renderTextButton("cancel", this.cancel)}
                        </View>
                    </View>
                </Image>
            </KeyboardAvoidingView >
        );
    }

    genericSubmit() {
        alert('wire up the submits for each')
    }

    cancel() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'SignIn' })
            ]
        })
        this.props.navigation.dispatch(resetAction);
    }


    next() {
        this._navigateForward();
    }

    _navigateForward() {
        const { navigate } = this.props.navigation;
        navigate('UserInfo');
    }
}