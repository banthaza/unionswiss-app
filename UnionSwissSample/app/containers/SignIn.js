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
    Easing,
    Switch
} from 'react-native';

export default class SignInPage extends React.Component {
    constructor() {
        super();
        this.signIn = this.signIn.bind(this);
        this.goBack = this.goBack.bind(this);
        this.login = this.login.bind(this);

        this.register = this.register.bind(this);
        this.animatedValue = new Animated.Value(0);
        this.animatedValue2 = new Animated.Value(0);
        this.duration = 600;
    }

    animate() {
        this.animatedValue.setValue(0)
        this.animatedValue2.setValue(0)
        let duration = this.duration;
        let animations = [
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 1,
                    duration: duration,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.animatedValue2,
                {
                    toValue: 1,
                    duration: (duration / 2),
                    easing: Easing.linear
                }
            )];

        Animated.stagger((duration / 2), animations).start();
    }

    animateReverse() {
        let duration = this.duration / 2;

        let animations = [
            Animated.timing(
                this.animatedValue,
                {
                    toValue: 0,
                    duration: duration,
                    easing: Easing.linear
                }
            ),
            Animated.timing(
                this.animatedValue2,
                {
                    toValue: 0,
                    duration: (duration / 2),
                    easing: Easing.linear
                }
            )];

        Animated.stagger((duration / 2), animations).start();
    }

    static navigationOptions = {
        header: null

    };

    render() {

        const slideDown = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 300]
        })

        const initialOpacity = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        })
        const secondaryOpacity = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        })

        const slideUp = this.animatedValue.interpolate({
            inputRange: [0, 1],
            outputRange: [300, 0]
        })

        const slideNameDown = this.animatedValue2.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -55]
        })

        return (
            <Image source={require('../resources/Background.png')} blurRadius={5} style={styles.container}>
                <View style={styles.mainGrid}>
                    <View style={styles.body} >
                        <Image source={require('../resources/Icon.png')} style={{ justifyContent: 'center' }}>
                            <Text style={styles.textSmallCentered}>Put Image Here</Text>
                        </Image>
                    </View>
                    <Animated.View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        //backgroundColor: 'red',
                        marginBottom: 50,
                        transform: [{ translateY: slideNameDown }]
                    }}>
                        <View style={styles.verticalRectangleWhite2} />
                        <Text style={styles.textLarge}>App Name</Text>
                        <View style={styles.verticalRectangleWhite2} />
                    </Animated.View>
                    <Animated.View style={{}} >
                        <Animated.View style={{ marginBottom: 50, opacity: initialOpacity, transform: [{ translateY: slideDown }] }}>
                            {CustomButtons.renderCleanButton("Sign In", this.signIn)}
                            {CustomButtons.renderColoredButton("Register", this.register)}
                        </Animated.View>
                        <Animated.View style={{
                            position: 'absolute',
                            //backgroundColor: 'red',
                            //zindex: 100,
                            bottom: 0,
                            left: 0,
                            right: 0, opacity: secondaryOpacity, transform: [{ translateY: slideUp }]
                        }} >
                            {CustomInputs.renderImageTextInput("User Name", require('../resources/contact.png'), this.genericInput)}
                            {CustomInputs.renderImageTextInput("Password", require('../resources/lock.png'), this.genericInput)}
                            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30 }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                                    <Switch tintColor="white" thumbTintColor="#F44336" />
                                    <Text style={styles.textButtonText}>Remember me</Text>
                                </View>
                                {CustomButtons.renderTextButton("Forgot Password?", this.forgotPassword)}
                            </View>
                            {CustomButtons.renderColoredButton("Sign In", this.login)}
                            {CustomButtons.renderTextButton("cancel", this.goBack)}
                        </Animated.View>
                    </Animated.View>
                </View >
            </Image >
        );
    }

    genericInput() {
        alert('heloo');
    }

    login() {
        const { navigate } = this.props.navigation;
        navigate('Home');
    }

    signIn() {
        this.animate();
    }

    goBack() {
        this.animateReverse();
    }

    register() {
        this._navigateToRegister();
    }

    forgotPassword() {
        alert('resettings password');
    }

    _navigateToRegister() {
        const { navigate } = this.props.navigation;
        navigate('ContactInfo');
    }
}


