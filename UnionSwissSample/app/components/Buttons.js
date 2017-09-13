import styles from '../styles/styles';
import React, { Component } from 'react';
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

export function renderCleanButton(name, func) {
    return <TouchableHighlight title={name} underlayColor={'rgba(0, 0, 0, 0.2)'} onPress={func} style={styles.buttonRound} >
        <Text style={styles.buttonText}>{name}</Text>
    </TouchableHighlight >
}

export function renderMenuCleanButton(name, func) {
    return <TouchableHighlight title={name} underlayColor={'rgba(0, 0, 0, 0.2)'} onPress={func} style={styles.menuRound} >
        <Text style={styles.menuButtonText}>{name}</Text>
    </TouchableHighlight >
}
export function renderMenuColoredButton(name, func) {
    return <TouchableHighlight title={name} underlayColor={'#E33124'} onPress={func} style={styles.menuRoundRed} >
        <Text style={styles.menuButtonText}>{name}</Text>
    </TouchableHighlight >
}
export function renderColoredButton(name, func) {
    return <TouchableHighlight title={name} underlayColor={'#E33124'} onPress={func} style={styles.buttonRoundRed} >
        <Text style={styles.buttonText}>{name}</Text>
    </TouchableHighlight >
}

export function renderGreenColoredButton(name, func) {
    return <TouchableHighlight title={name} underlayColor={'#437B39'} onPress={func} style={styles.buttonRoundGreen} >
        <Text style={styles.buttonText}>{name}</Text>
    </TouchableHighlight >
}

export function renderTextButton(name, func) {
    return <TouchableHighlight title={name} underlayColor={'transparent'} onPress={func} style={styles.textButton} >
        <Text style={styles.textButtonText}>{name}</Text>
    </TouchableHighlight >
}

export function renderTextButtonUnspaced(name, func) {
    return <TouchableHighlight title={name} underlayColor={'transparent'} onPress={func} style={styles.textButtonNoVerticalMargin} >
        <Text style={styles.textButtonText}>{name}</Text>
    </TouchableHighlight >
}