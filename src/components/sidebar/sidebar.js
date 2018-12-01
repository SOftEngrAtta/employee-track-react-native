import React, { Component } from 'react';
import { View, Text, Dimensions} from 'react-native';



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
                            <Text>Home</Text>
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
        backgroundColor: '#222',
        zIndex: 2,
        transition: '2s'

    }
}