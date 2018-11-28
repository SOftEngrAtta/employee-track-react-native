import React , { Component } from 'react';
import { View } from 'react-native';
import Toast from 'react-native-root-toast';

export class Toastr extends Component{
    
    constructor(props){
        super(props);
        this.state = { visible : false , duration : 0 , message : ''}
    }

    componentWillReceiveProps(nextprops){
        
        const { message , timeduaration } = nextprops.errormessage;
        if(message && timeduaration){
            this.state['visible'] = true;
            this.state['message'] = message;
            this.state['duration'] = timeduaration;

            const _this = this;

            setTimeout(function () {
                _this.setState({
                    visible : false
                })
            }, this.state.duration );
        }
    }

    render(){
        return <Toast
            duration = { this.state.duration }
            visible={ this.state.visible }
            position= {Toast.positions.BOTTOM}
            shadow={true}
            animation={true}
            hideOnPress={true}
            >{ this.state.message }
        </Toast> 
    }
}

