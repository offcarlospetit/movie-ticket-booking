import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 335,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'rgba(10, 6, 87, 255)',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.8,
        shadowRadius: 10,
    },
    buttonContainerFacebook: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingStart: 23.5,
        paddingTop: 10,
        width: 335,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'rgba(58, 85, 159, 255)',
    },
    buttonContainerGoogle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingStart: 23.5,
        paddingTop: 10,
        width: 335,
        height: 50,
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