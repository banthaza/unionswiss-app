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

export default class Terms extends Component {
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
            <Image source={require('../resources/Background.png')} blurRadius={5} style={styles.container}>
                <View style={styles.mainGrid}>
                    <View style={styles.body} >
                        <ScrollView style={styles.termsScrollViewer}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 12, marginHorizontal: 40, marginVertical: 20 }}>
                                Terms and Conditions ("Terms"){"\n"}

                                Last updated: (2017/05/28){"\n"}

                                Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using{"\n"}

                                the http://www.mywebsite.com (change this) website and the My Mobile App (change this) mobile{"\n"}

                                application (the "Service") operated by My Company (change this) ("us", "we", or "our").{"\n"}

                                Your access to and use of the Service is conditioned on your acceptance of and compliance with{"\n"}

                                these Terms. These Terms apply to all visitors, users and others who access or use the Service.{"\n"}

                                By accessing or using the Service you agree to be bound by these Terms. If you disagree{"\n"}

                                with any part of the terms then you may not access the Service.{"\n"}

                                Purchases{"\n"}

                                If you wish to purchase any product or service made available through the Service ("Purchase"),{"\n"}

                                you may be asked to supply certain information relevant to your Purchase including, without{"\n"}

                                limitation, your …{"\n"}

                                The Purchases section is for businesses that sell online (physical or digital). For the full{"\n"}

                                disclosure section, create your own Terms and Conditions.{"\n"}

                                Subscriptions{"\n"}

                                Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in{"\n"}

                                advance on a recurring ...{"\n"}

                                The Subscriptions section is for SaaS businesses. For the full disclosure section, create your{"\n"}

                                own Terms and Conditions.{"\n"}

                                Content{"\n"}

                                Our Service allows you to post, link, store, share and otherwise make available certain information,{"\n"}

                                text, graphics, videos, or other material ("Content"). You are responsible for the …{"\n"}

                                The Content section is for businesses that allow users to create, edit, share, make content on{"\n"}

                                their websites or apps. For the full disclosure section, create your own Terms and Conditions.{"\n"}
                                Links To Other Web Sites{"\n"}

                                Our Service may contain links to third-party web sites or services that are not owned or controlled{"\n"}

                                by My Company (change this).{"\n"}

                                My Company (change this) has no control over, and assumes no responsibility for, the content,{"\n"}

                                privacy policies, or practices of any third party web sites or services. You further acknowledge and{"\n"}

                                agree that My Company (change this) shall not be responsible or liable, directly or indirectly, for any{"\n"}

                                damage or loss caused or alleged to be caused by or in connection with use of or reliance on any{"\n"}

                                such content, goods or services available on or through any such web sites or services.{"\n"}

                                Changes{"\n"}

                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a{"\n"}

                                revision is material we will try to provide at least 30 (change this) days' notice prior to any new terms{"\n"}

                                taking effect. What constitutes a material change will be determined at our sole discretion.{"\n"}

                                Contact Us{"\n"}

                                If you have any questions about these Terms, please contact us.{"\n"}
                            </Text>
                        </ScrollView>
                    </View>
                    <View style={styles.registrationFooter}>
                        {CustomButtons.renderGreenColoredButton("Accept", this.next)}
                        {CustomButtons.renderTextButton("cancel", this.cancel)}
                    </View>
                </View>
            </Image>
        );
    }

    genericSubmit() {
        alert('wire up the submits for each')
    }


    next() {
        this._navigateForward();
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

    _navigateForward() {
        const { navigate } = this.props.navigation;
        navigate('RegistrationComplete');
    }
}