import { StyleSheet } from "react-native";

export default Styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    headerContainerLeft: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 20
    },
    headerContainerCenter: {
        flex: 2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    headerContainerRight: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'flex-end',
        marginRight: 20
    },
    headerTitle: {
        // fontFamily: 'AvenirLTStd',
        textTransform: 'uppercase',
        fontSize: 28,
        color: '#050329',
    }
})