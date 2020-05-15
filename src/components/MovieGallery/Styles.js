import { StyleSheet, Dimensions } from "react-native";
import Assets from 'assets'


export default Styles = StyleSheet.create({
    movieGalleryContainer: {
        flex: 4
    },
    scrollViewContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 21
    },
    scrollViewContainerContainer: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 21,
        marginTop: 20
    },
    imageCover: {
        width: Dimensions.get('screen').width * 0.756,
        height: Dimensions.get('screen').height * 0.17,
        borderRadius: 12,
        marginRight: 12
    },
    imageCoverView: {
        alignItems: "center",
        flex: 1,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    imageCoverViewCont: {
        alignItems: "flex-start",
        width: Dimensions.get('screen').width * 0.756,
        height: Dimensions.get('screen').height * 0.17,
        borderRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 0)",

    },
    imageCoverViewContCategory: {
        alignItems: "flex-start",
        width: Dimensions.get('screen').width * 0.2657,
        height: Dimensions.get('screen').height * 0.1462,
        borderRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 0)",

    },
    imageCoverContainer: {
        flex: 3,
    },
    imageCoverCategory: {
        width: Dimensions.get('screen').width * 0.2657,
        height: Dimensions.get('screen').height * 0.1462,
        borderRadius: 12,
        marginRight: 12,
    },
    scrollViewList: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 12
    },
    movieDetail: {
        flex: 1,
        marginLeft: 5,
        marginTop: 12
    },
    textDetailTitle: {
        fontSize: 12,
        color: Assets.colors.PRIMARY_COLOR,
        fontWeight:'bold'
    },
    textDetailTitlePercent: {
        fontSize: 10,
        color: Assets.colors.PRIMARY_COLOR
    }
})