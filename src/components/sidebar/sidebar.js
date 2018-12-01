import React, { Component } from 'react';
import { View,  Dimensions , Image , Text ,  StatusBar , ProgressBarAndroid} from 'react-native';
import * as Progress from 'react-native-progress';


//image
import profileImage from '../../assets/profileImage.jpg'


let ScreenHeight = Dimensions.get("window").height;


export class SideBarTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }


    componentWillReceiveProps(nextprops) {
        debugger
        const { showMenu } = nextprops;
        if (showMenu) sideMenuCls.container.left = 0;
        this.setState({
            showMenu: showMenu
        })
    }

    render() {
        return (
            <View >
                {

                    (this.state.showMenu) ?

                        <View style={ sideMenuCls.container } >
                            <View style={ sideMenuCls.profileImagePrnt }>
                                <Image source={ profileImage } style={ sideMenuCls.profileImage }/>
                                <Text style={ sideMenuCls.profileImageText }> Atta Ur Rehman (20%)</Text>
                                
                            </View>


                                <Progress.Bar progress={0.3} animated={ true } color="#fff" height={6} width={70} borderColor="#fff"  style={{ marginLeft: 70, marginTop: 5}}/>
                          

                        </View>

                        : null
                }
            </View>
        )
    }
}


const sideMenuCls = {
    container: {
        position: 'absolute',
        width: '50%',
        height: ScreenHeight,
        top: 0,
        backgroundColor: '#2e416b',
        zIndex: 2,
        transition: '2s'

    },
    profileImagePrnt:{
        false: 1,
        flexDirection: 'row', 
        top: 20,
        left: 20,
    },
    profileImage : {
        width: 40, height: 40,
        borderRadius : 50,
        borderColor: '#fff',
        borderWidth: 2
    },
    profileImageText : {
        color: "#fff",
        marginTop: 5,
        fontSize: 10,
        marginLeft: 10 
    }
}