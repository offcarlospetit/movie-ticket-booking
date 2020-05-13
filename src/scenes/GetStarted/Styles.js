import { StyleSheet, Dimensions } from "react-native";


export default Styles = StyleSheet.create({
    getStartedContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    getStartedContainerImageLogo: {
        resizeMode: 'contain',
        flex: 1,
        width: Dimensions.get('screen').width * 0.3309,
        height: Dimensions.get('screen').height * 0.1718
    },
    getStartedContainerContent: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
})