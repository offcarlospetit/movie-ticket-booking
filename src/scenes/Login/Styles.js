import { StyleSheet, Dimensions } from 'react-native';

export default Styles = StyleSheet.create({
    loginContainer: {
        flex: 1
    },
    loginContainerSectionOne: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row'
    },
    loginContainerImage: {
        resizeMode: 'contain',
        flex: 1,
        width: 125,
        height: 139
    },
    loginContainerSectionTwo: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    loginContainerTextInput: {
        width: Dimensions.get('window').width * 0.90,
        height: 45,
        borderBottomColor: "#9594B4",
        borderBottomWidth: 1
    },
    loginContainerSectionThree: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    loginContainerText:{ 
        color: "#929292", 
        fontSize: 14 
    }
})