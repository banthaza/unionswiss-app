import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: null,
        height: null,
    },
    sideMenuContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: null,
        height: null,
        backgroundColor: '#2E2F2E'
    },
    textSmall: {
        fontSize: 14,
        color: 'white'
    },
    textMedium: {
        fontSize: 20,
        color: 'white'
    },
    textLarge: {
        fontSize: 24,
        color: 'white'
    },
    textSmallCentered: {
        fontSize: 14,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        //backgroundColor: 'black'
    },
    textMediumCentered: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        //backgroundColor: 'black'
    },
    rowCenteredSpaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: 'red',
        marginBottom: 50
    },
    verticalRectangleWhite2: {
        width: 100, height: 2, backgroundColor: 'white'
    },
    textInputVerticalRectangle: {
        width: 1,
        height: 25,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white'
    },
    inputFieldsBody: {
        flex: 1, marginTop: 50
    },
    termsScrollViewer: {
        borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 20
    },
    mainGrid: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        flex: 1,
        justifyContent: "space-between"
    },
    buttonRound: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5
    },
    buttonRoundRed: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#F44336',
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5
    },
    buttonRoundGreen: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#4CA53B',
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5
    },
    textButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: 'transparent',
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5
    },
    textButtonNoVerticalMargin: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        backgroundColor: 'transparent',
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
    },
    textButtonText: {
        fontSize: 12,
        color: '#95989A'
    },
    menuRound: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5
    },
    menuRoundRed: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        backgroundColor: '#F44336',
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5
    },
    menuButtonText: {
        fontSize: 17,
        color: 'white'
    },
    roundTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 5,
        marginBottom: 5
    },
    borderlessRoundTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        height: 50,
        //borderColor: 'white',
        //borderWidth: 1,
        //borderRadius: 100,
        marginLeft: 10,
        marginRight: 10,
    },
    searchTextInput: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 100,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5
    },
    imageTextInput: {
        marginLeft: 20,
        marginRight: 10,
        width: 25,
        height: 25
    },
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        marginBottom: 50
    },
    registrationFooter: {
        marginBottom: 10
    },
    profileFooter: {
        marginBottom: 5
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    registrationText: {
        fontSize: 20,
        color: 'white',
        margin: 20
    }
});