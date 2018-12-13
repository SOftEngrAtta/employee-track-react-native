import React , { Component } from 'react';
import { View , Text } from 'native-base';


// components 
import { HeaderComponent } from '../header/header';

export class StatusComponent extends Component{
    render(){
        return (
            <View>
                <HeaderComponent title="Status" getHistory={this.props} bgColor="#e74003"/>
                <Text> Hello </Text>
            </View>
        )
    }
}