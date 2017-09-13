
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Button,
    TouchableHighlight,
    TouchableOpacity,
    Animated
} from 'react-native';

import styles from '../styles/styles';
import * as CustomButtons from '../components/Buttons';
import { NavigationActions } from 'react-navigation'

export class SideMenuBar extends Component {
    static navigationOptions = {
        headerTintColor: 'white',
        headerStyle: {
            position: 'absolute',
            opacity: 0,
            backgroundColor: 'transparent',
            top: 0,
            left: 0,
            right: 0
        }
    };

    constructor() {
        super()
        this.signOut = this.signOut.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
    }

    render() {
        return (
            <View style={styles.sideMenuContainer}>
                <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, marginBottom: 20 }}>
                    <TouchableOpacity activeOpacity={0.8} onPress={this.goToProfile} >
                        <Image source={require('../resources/selfie.png')} style={{ borderRadius: 50, width: 100, height: 100, margin: 5 }} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 18, color: 'white' }}>User Name</Text>
                    <Text style={{ fontSize: 10, color: 'white', margin: 5 }}>tap above to view profile</Text>
                </View>
                <View style={{ flex: 1 }}>
                    {CustomButtons.renderMenuCleanButton("History", this.goToHistory)}
                    {CustomButtons.renderMenuCleanButton("Settings", this.goToSettings)}
                </View>
                <View style={styles.footer}>
                    {CustomButtons.renderMenuColoredButton("Sign out", this.signOut)}
                </View>
            </View>
        );
    }

    goToHistory() {
        alert('goToHistory');
    }
    goToSettings() {
        alert('goToSettings');
    }
    goToProfile() {
        this.props.navigation.navigate('ProfileScreen'); // open drawer
    }
    signOut() {
        this.props.navigation.navigate('DrawerClose'); // open drawer
        let inter = setInterval(() => {
            clearInterval(inter);
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'SignIn' })
                ]
            })
            this.props.navigation.dispatch(resetAction);
        }, 150)
    }

}