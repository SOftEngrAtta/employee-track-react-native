import React, { Component } from 'react'
import { View } from 'react-native'
import Toaster, { ToastStyles } from 'react-native-toaster'




export default class DisplayMessage extends Component {

    constructor(props){
        super(props);
        this.state = { message: null }
    }

    componentWillReceiveProps(nextprops){
        this.setState({ text: 'Hooray!'})
    }

    render() {
        return (
            <View>
                <Toaster message={ this.state.message } />
            </View>
        )
    }
}

