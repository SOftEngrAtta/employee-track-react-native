//modules
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

//services
import { setkey_data } from '../../../service/storage.service';
import { loginUser } from '../../../service/auth.service';

//shared 
import DisplayMessage from '../../../shared/toastr.service'

//css
import { loginClass } from './loginCss'



export class Login extends Component {

    constructor() {
        super();
        this.state = { email: '', password: '', message: null }
    }

    handler(text, key) {
        let updateObj = Object.assign({}, this.state);
        updateObj[key] = text;
        this.setState(updateObj)
    }

    loginUser() {
        console.log(this.state);
        if (this.state.email && this.state.password) {
            loginUser(this.state)
                .then(res => {
                    setkey_data({ 'KeyName': 'Id', 'KeyData': res.user._user.uid });
                    Actions.dashboard();
                }, err => {
                    console.log('login failed');
                })
        }
    }

    render() {
        return (
            <View style={loginClass.container}>

                <Icon
                    name='g-translate'
                    color='#00aced' />
                <Item>
                    <Input type="text" placeholder="Email" onChangeText={(text) => { this.handler(text, 'email') }} value={this.state.email} />
                </Item>
                <Item last>
                    <Input type="password" placeholder="Password" secureTextEntry={true} onChangeText={(text) => { this.handler(text, 'password') }} value={this.state.password} />
                </Item>
                <Text style={{ fontSize: 10, margin: "2%" }} > Reset Password </Text>
                <Button style={loginClass.lgnBtn} full success onPress={() => this.loginUser()}>
                    <Text style={loginClass.lgnBtn.Text}>Sign In</Text>
                </Button>
            </View>
        )
    }
}