import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Header, Icon } from 'react-native-elements'
//component 
import { SideBarTab } from '../sidebar/sidebar'

//css
import { headerClass } from './headerCls';

export class HeaderTab extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleName: 'Dashboard',
            notifications: 0,
            showMenu : false
        }
    }
    
    componentWillReceiveProps(nextprops) {
        const { title } = nextprops.title;
        let updateobj = Object.assign({}, this.state);
        updateobj['title'] = title;
        this.setState(updateobj);
    }

    opensidemenu(){
        let updateObj = Object.assign({}, this.state);
        updateObj['showMenu'] = true;
        this.setState(updateObj)
    }

    render() {
        return (

                <View>
                    <SideBarTab showMenu={ this.state.showMenu }/>
                    <Header
                        backgroundColor="#e74003"
                        leftComponent={{ icon: 'menu', color: '#fff' , onPress: ()=> this.opensidemenu() } }
                        centerComponent={{ text: this.state.titleName, style: { color: '#fff' } }}
                        rightComponent={
                            <View style={headerClass.notificationPrn}>
                                <Icon name="notifications" size={25} color="#fff" />
                                <Text style={headerClass.notification}> {this.state.notifications} </Text>
                            </View>
                        }
                    />
                </View>
        );
    }
}