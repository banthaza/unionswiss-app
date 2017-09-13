import React, { Component } from 'react';
import { renderColoredButton, renderCleanButton, renderBackground } from '../components/Buttons';
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

import {
    StackNavigator, DrawerNavigator
} from 'react-navigation';

import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import Register from './Register';
import SignInPage from './SignIn';
import ContactInfo from './ContactInfo';
import UserInfo from './UserInfo';
import Terms from './Terms';
import RegistrationComplete from './RegistrationComplete';
import ProfileScreen from './ProfileScreen';

import { SideMenuBar } from './SideMenu';
import Home from './Home';

const SideBarNavigator = DrawerNavigator({
    Home: { screen: Home },
}, {
        drawerWidth: 300,
        contentComponent: props => <SideMenuBar {...props} />
    })

const SignInPageNavigator = StackNavigator({
    SignIn: { screen: SignInPage },
    ContactInfo: { screen: ContactInfo },
    UserInfo: { screen: UserInfo },
    Terms: { screen: Terms },
    RegistrationComplete: { screen: RegistrationComplete },
    Home: {
        screen: SideBarNavigator,
        navigationOptions: ({ navigation }) => ({
            header: null
        }),
    },
    ProfileScreen: { screen: ProfileScreen }
}, {
        //headerMode: 'none'
        cardStyle: {
            opacity: 1,
        },
        transitionConfig: () => ({
            screenInterpolator: (sceneProps) => {
                if (sceneProps.index === 0 && sceneProps.scene.route.routeName !== 'SignIn' && sceneProps.scenes.length > 2) {
                    return null;
                }
                return CardStackStyleInterpolator.forHorizontal(sceneProps);
            }
        })
    });

export { SignInPageNavigator, SideBarNavigator }