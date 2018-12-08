import { Dimensions } from 'react-native'

let ScreenHeight = Dimensions.get("window").height;

export const profileCls = {
    backgroundImage: {
        flex: 1,
        width: null,
        height: null
    },
    profileImagePrnt: {
        width: "100%", 
        height: ScreenHeight / 3, 
        resizeMode: 'cover', 
        top: -1, 
        backgroundColor: '#e74003', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    profileImage: {
        width: 100, 
        height: 100, 
        borderRadius: 100, 
        borderRadius: 100, 
        borderWidth: 2, 
        borderColor: '#fff'
    },
    profileImageIcon: {
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10
    },
    profileForm: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0 , 
        justifyContent: 'center' , 
        alignItems: 'center', 
        width: null
    },
    profileFormInput: {
        fontSize: 14,
        color: '#e74003', 
        borderBottomColor: '#e74003', 
        borderBottomWidth : 2, 
        height: 40, 
        width: null, 
        marginTop: 5,
        padding: 2, 
        width: "80%"
    },
    profileFormBtnPrnt: {
        flex:1, 
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center', 
        marginTop: 15
    },
    profileFormBtn: {
        backgroundColor: '#e74003' , 
        width: '80%' , 
        justifyContent: 'center', 
        alignItems: 'center'
    }
}