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
    ScrollView
} from 'react-native';
import { NavigationActions } from 'react-navigation'

export default class Home extends Component {
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
        super();
        this.openMenu = this.openMenu.bind(this);
    }

    render() {
        return (
            <Image source={require('../resources/Background.png')} blurRadius={5} style={styles.container}>
                <View style={styles.mainGrid}>
                    <TouchableOpacity style={{ margin: 15 }} onPress={this.openMenu}>
                        <Image source={require('../resources/hamburger.png')} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        {CustomInputs.renderSearchTextInput("Search", require('../resources/search.png'), this.search)}
                    </View>
                </View>
            </Image >
        );
    }

    search(text) {
        alert('change: ' + JSON.stringify(text));
    }

    openMenu() {
        this.props.navigation.navigate('DrawerOpen'); // open drawer
    }
}