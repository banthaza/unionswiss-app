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
    TouchableOpacity,
    Animated,
    TextInput,
    KeyboardAvoidingView,
    ScrollView, Switch

} from 'react-native';

import { NavigationActions } from 'react-navigation'

export default class ProfileScreen extends Component {
    static navigationOptions = {
        headerTintColor: 'white',
        headerStyle: {
            position: 'absolute',
            backgroundColor: 'transparent',
            top: 0,
            left: 0,
            right: 0
        }
    };

    constructor() {
        super();
        this.openMenu = this.openPhotoSelector.bind(this);
    }

    render() {
        return (
            <Image source={require('../resources/Background.png')} blurRadius={5} style={styles.container}>
                <View style={styles.mainGrid}>
                    <TouchableOpacity style={{ height: 220 }} onPress={this.openPhotoSelector}>
                        <Image source={require('../resources/selfie.png')} style={{ flex: 1, height: null, width: null }} />
                    </TouchableOpacity>
                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }} >
                        <Text style={styles.textMedium}>Actual Name</Text>
                        <Text style={styles.textButtonText}>user name</Text>
                    </View>
                    <View style={{ flex: 1 }} >
                        {CustomInputs.renderBorderlessImageTextInput("Id Number", require('../resources/edit.png'), this.idNumberEdit)}
                        {CustomInputs.renderBorderlessImageTextInput("Email Address", require('../resources/email.png'), this.emailEdit)}
                        {CustomInputs.renderBorderlessImageTextInput("Phone Number", require('../resources/mobile.png'), this.mobileNumberEdit)}
                    </View>
                    <View style={styles.profileFooter}>
                        <View style={{ alignItems: 'center', flexDirection: 'row', marginLeft: 30 }}>
                            <Switch tintColor="white" thumbTintColor="#F44336" />
                            <Text style={styles.textButtonText}>Show Status</Text>
                        </View>
                        <View style={styles.buttonRoundRed}>
                            <Text style={styles.textMedium}>Status</Text>
                        </View>
                        {CustomButtons.renderTextButtonUnspaced("Reset Password", this.resetPassword)}
                    </View>
                </View>
            </Image >
        );
    }

    idNumberEdit() {

    }
    emailEdit() {

    }
    mobileNumberEdit() {

    }
    openPhotoSelector() {
        alert('select photo');
    }

    resetPassword() {
        alert('reset pasword');
    }
}