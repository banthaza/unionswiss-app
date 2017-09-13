import React, { Component } from 'react';
import { renderColoredButton, renderCleanButton } from '../components/Buttons';
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
    Animated
} from 'react-native';


export default class Register extends Component {

    static navigationOptions = {
        //title: 'Registration',
        headerStyle: {
            position: 'absolute',
            //alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
            //zindex: 100,
            top: 0,
            left: 0,
            right: 0
        }
    };

    constructor() {
        super();
        this._navigateBack = this._navigateBack.bind(this);
    }

    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={{ marginTop: 50 }}>
                <Text>register here !!!</Text>
                <Button title='name' onPress={() => this._navigateBack}></Button>
            </View>
        );
    }

    _navigateBack() {
        const { goBack } = this.props.navigation;
        goBack();
    }
}