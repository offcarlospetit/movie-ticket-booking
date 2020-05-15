import { StyleSheet, Dimensions } from "react-native";
import Assets from 'assets/index'

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
        flex: 8,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerContainerRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    headerTitle: {
        // fontFamily: 'AvenirLTStd',
        textTransform: 'uppercase',
        fontSize: 28,
        color: Assets.colors.PRIMARY_COLOR,
        marginLeft: 35,
    },
    animatedHeaderContainer: {
        flex: 5,
        alignItems: 'center'
    },
    animatedHeaderSearchBar: {
        height: 25,
        zIndex: 200,
        position: 'absolute'
    },
    animatedHeaderSearchBarContent: {
        flex: 1,
        flexDirection: 'row'
    },
    animatedHeaderSearchBarContentTexInput: {
        flex: 6,
        justifyContent: 'center'
    },
    textInputSearchBar: {
        borderBottomColor: "#9594B4",
        borderBottomWidth: 1
    },
    animatedHeaderSearchBarContentCloseButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    animatedHeaderSearchBarSearchIcon: {
        flex: 1,
        alignItems: 'center',
    },
    animatedHeaderContainerSearchListContainer: {
        zIndex: 200,
        top: 100,
        position: 'absolute',
        width: Dimensions.get('screen').width,
        backgroundColor: 'rgba(255,255,255, 0.89)'
    }

})