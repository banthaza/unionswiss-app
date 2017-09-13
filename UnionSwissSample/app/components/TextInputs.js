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
    Animated,
    TextInput
} from 'react-native';

export function renderImageTextInput(placeHolderText, image, func) {
    return (
        <View style={styles.roundTextInput}>
            <Image source={image} style={styles.imageTextInput} />
            <View style={styles.textInputVerticalRectangle} />
            <TextInput underlineColorAndroid='transparent' placeholder={placeHolderText} placeholderTextColor='white' onSubmitEditing={(text) => func(text)} style={{ width: 300, color: 'white', fontSize: 20 }}></TextInput>
        </View>
    )
}
export function renderBorderlessImageTextInput(placeHolderText, image, func) {
    return (
        <View style={styles.borderlessRoundTextInput}>
            <Image source={image} style={styles.imageTextInput} />
            <View style={styles.textInputVerticalRectangle} />
            <TextInput underlineColorAndroid='transparent' placeholder={placeHolderText} placeholderTextColor='white' onSubmitEditing={(text) => func(text)} style={{ width: 300, color: 'white', fontSize: 20 }}></TextInput>
        </View>
    )
}
export function renderSearchTextInput(placeHolderText, image, func) {
    return (
        <View style={styles.searchTextInput}>
            <Image source={image} style={styles.imageTextInput} />
            <TextInput underlineColorAndroid='transparent' placeholder={placeHolderText} placeholderTextColor='white' onChangeText={(text) => func(text)} style={{ color: 'white', fontSize: 20, flex: 1, marginRight: 55, textAlign: 'center' }}></TextInput>
        </View>
    )
}