import { StyleSheet, Dimensions } from "react-native";
import Assets from 'assets'

export default Styles = StyleSheet.create({
    categoryContainer: {
        flex: 1
    },
    categoryContainerScrollView: {
        justifyContent: 'center',
    },
    categoryContainerCategoryText: {
        fontSize: 18,
    },
    CategoryListContent:{
        width: Dimensions.get('screen').width * 0.30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomColor: Assets.colors.SECONDARY_COLOR,
        marginRight: 10,
        marginLeft: 10
    }
})