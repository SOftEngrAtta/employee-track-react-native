import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, Dimensions, Animated , StatusBar } from 'react-native';
import { createTransition, FlipX } from 'react-native-transition';

const Transition = createTransition(FlipX);

let ScreenHeight = Dimensions.get("window").height;


export class SideBarTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
            MainPosition: [sideMenuCls.main, {width: screenWidth * 2}, {height: screenHeight}, {marginTop: 0}, {marginLeft: 0}],
            paneDimensions: [sideMenuCls.pane, {width: screenWidth}, {height: screenHeight}]
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

                        <View style={this.state.MainPosition}>
                            <StatusBar hidden />
                            <View style={this.state.paneDimensions}>
                                <View style={sideMenuCls.buttonsContainer}>
                                    <TouchableOpacity style={sideMenuCls.button} onPress={() => this.SlidePane('right')}>
                                        <Text style={sideMenuCls.buttonText}>Slide Right</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={this.state.paneDimensions}>
                                <Text style={sideMenuCls.paneText}>Right Pane</Text>
                            </View>
                        </View>

                        : null
                }
            </View>
        )
    }
}


const sideMenuCls = {
    // container: {
    //     position: 'absolute',
    //     width: '50%',
    //     height: ScreenHeight,
    //     top: 0,
    //     backgroundColor: '#222',
    //     zIndex: 2,
    //     transition: '2s'

    // },
    "main": {
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'hsla(0, 0%, 0%, 1)',
      },
      "row": {
        flexDirection: 'row',
        width: '100%',
        height: '100%',
      },
      "pane": {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 50,
        borderTopColor: 'transparent',
        backgroundColor: 'hsla(38, 100%, 73%, 1)',
      },
      "paneText": {
        fontSize: 20,
        color: 'black'
      },
      "buttonsContainer": {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        paddingTop: 0,
        paddingBottom: 3,
      },
      "button": {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '94%',
        marginBottom: 3,
        padding: 10,
        backgroundColor: 'hsla(38, 100%, 50%, 1)'
      },
      "buttonText": {
        fontSize: 20,
        color: '#FFF'
      },
}