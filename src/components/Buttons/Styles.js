import { StyleSheet, Dimensions } from 'react-native';



export default Styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width * 0.809,
        height: Dimensions.get('screen').height *0.0558,
        borderRadius: 8,
        backgroundColor: 'rgba(10, 6, 87, 255)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
    },
    buttonContainerFacebook: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingStart: 23.5,
        paddingTop: 10,
        width: Dimensions.get('screen').width * 0.809,
        height: Dimensions.get('screen').height *0.0558,
        borderRadius: 8,
        backgroundColor: 'rgba(58, 85, 159, 255)',
    },
    buttonContainerGoogle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingStart: 23.5,
        paddingTop: 10,
        width: Dimensions.get('screen').width * 0.809,
        height: Dimensions.get('screen').height *0.0558,
        borderRadius: 8,
        borderColor: 'rgba(212, 212, 212, 255)',
        backgroundColor: 'rgba(255, 255, 255, 255)',
        borderWidth: 1

    },
    textButton: {
        // fontFamily: 'AvenirLTStd',
        fontSize: 18,
        textTransform: 'uppercase',
        color: 'rgba(255, 255, 255, 255)'
    },
    textButtonFacebook: {
        // fontFamily: 'AvenirLTStd',
        textTransform: 'uppercase',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 255)',
    },
    textButtonGoogle: {
        // fontFamily: 'AvenirLTStd',
        textTransform: 'uppercase',
        fontSize: 14,
        color: '#050329',
    }
})