import React , { Component } from 'react';
import { View , Text } from 'native-base';
import { HeaderComponent } from '../header/header'

export class ProfileComponent extends Component{
    render(){
        return(
            <View>
                <HeaderComponent title="Profile"/>
                <Text>
                    Profile Component
                </Text>
            </View>
        )
    }
}