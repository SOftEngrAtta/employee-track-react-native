//modules
import React, { Component } from 'react';
import { View, KeyboardAvoidingView , Text, ImageBackground , Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { material , robotoWeights } from 'react-native-typography';

import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

//services
import { setkey_data } from '../../../service/storage.service';
import { loginUser } from '../../../service/auth.service';


//css
import { loginClass } from './loginCss'

//images
import logo from '../../../assets/logo.png';
import background from '../../../assets/background.jpg';





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
            <ImageBackground source={ background } style={loginClass.backgroundImage} resizeMode="stretch">
                <KeyboardAvoidingView style={loginClass.container} >
                    <View >
                        <View style={loginClass.imgParnt}>
                            <Text style={ loginClass.heading } style={ material.title }>Employee Tracking</Text>
                            <Image style={ loginClass.logoImage} source={ logo}/>
                        </View>                        
                        <Item>
                            <Input type="text" placeholder="Email" onChangeText={(text) => { this.handler(text, 'email') }} value={this.state.email} />
                        </Item>
                        <Item last>
                            <Input type="password" placeholder="Password" secureTextEntry={true} onChangeText={(text) => { this.handler(text, 'password') }} value={this.state.password} />
                        </Item>
                        <View style={ loginClass.resetPassword}>
                           <Icon name="lock" size={10} color="#ccc"/>
                            <Text style={{ fontSize: 10, margin: "2%" }} style={ robotoWeights.thin }> 
                                Forget Password 
                            </Text>
                        </View>
                        <Button style={loginClass.lgnBtn} full success onPress={() => this.loginUser()}>
                            <Text style={loginClass.lgnBtn.Text}>Sign In</Text>
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}