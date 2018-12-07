import React, { Component } from 'react';
import { View, Text , TouchableHighlight } from 'react-native';
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

//component 
import { SideBarTab } from '../sidebar/sidebar'

//css
import { headerClass } from './headerCls';

export class HeaderComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            titleName: 'Dashboard',
            notifications: 0,
            showMenu : false
        }
    }
    
    componentWillReceiveProps(nextprops) {
        debugger
        const { title } = nextprops.title;
        let updateobj = Object.assign({}, this.state);
        updateobj['title'] = title;
        this.setState(updateobj);
    }

    goPreviousHistory(){
        debugger
        console.log(this.props)
    }


    render() {
        return (
                <View>
                    <Header
                        backgroundColor={ ( this.props.bgColor )? this.props.bgColor :"#e74003"}
                        leftComponent={
                            <TouchableHighlight onPress={ ()=> this.props.getHistory.navigation.goBack() }>
                                <Icon name="arrow-left" size={20} color="#fff"/>                               
                            </TouchableHighlight>
                        }
                        centerComponent={{ text: this.props.title , style: { color: '#fff' } }}
                        // rightComponent={
                        //     ( this.props.title == )
                        // }
                    />
                </View>
        );
    }
}