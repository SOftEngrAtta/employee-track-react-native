import { Dimensions } from 'react-native';
let ScreenHeight = Dimensions.get("window").height;

export const sideMenuCls = {
    container: {
        position: 'absolute',
        width: '100%',
        height: ScreenHeight,
        top: 0,
        backgroundColor: '#0778bdd1',
        zIndex: 2,
        transition: '2s'
    },
    profileBanner: {
        backgroundColor: '#fff',
        height: ScreenHeight / 2.5
    },
    signOut: {
        justifyContent: 'flex-end' , 
        alignItems: 'flex-end', 
        padding: 5
    },
    profileImagePrnt: {
        false: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'


    },
    profileImage: {
        width: 80, height: 80,
        borderRadius: 50,
        borderColor: '#0778bdd1',
        borderWidth: 3,
        marginTop: 5
    },
    profileBannerText: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileImageText: {
        color: "#0778bdd1",
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 15,
        marginLeft: 10,
    },
    pagesPortionPrnt: {
        flexWrap: 'wrap', 
        alignItems: 'flex-start', 
        flexDirection:'row',
        borderBottomColor: '#fff', 
        borderBottomWidth: 2 , 
        padding: 10 
    },
    displayDetail: {
        flex: 1, flexDirection: "row" , marginTop: 10
    },
    displayDetailDiv: {
        width: "25%" , alignItems: 'center'
    },
    displayDetailDivImage: {
        width: 20, height: 20
    },
    displayDetailDivText: {
        color : "#0778bdd1" , fontSize: 16 , fontWeight: "bold"
    }
}