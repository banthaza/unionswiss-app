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
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class RegistrationComplete extends Component {
    static navigationOptions = {
        header: null
    };

    constructor() {
        super();
        this._returnToSignIn = this._returnToSignIn.bind(this);
    }

    render() {
        return (
            <Image source={require('../resources/Background.png')} blurRadius={5} style={styles.container}>
                <View style={styles.mainGrid}>
                    <View style={styles.body} >
                        <Image source={require('../resources/thumbs.png')} />
                        <Text style={styles.registrationText}>Registration Complete</Text>
                    </View>
                    <View style={styles.footer}>
                        {CustomButtons.renderColoredButton("Proceed", this._returnToSignIn)}
                    </View>
                </View>
            </Image >
        );
    }

    _returnToSignIn() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'SignIn' })
            ]
        })
        this.props.navigation.dispatch(resetAction);
    }
}