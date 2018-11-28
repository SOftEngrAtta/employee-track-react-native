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

// shared 
import { Toastr } from '../../../shared/toastr.service';
import { LoaderDisplay } from '../../../shared/loader.service'

//css
import { loginClass } from './loginCss'

//images
import logo from '../../../assets/logo.png';
import background from '../../../assets/background.jpg';






export class Login extends Component {

    constructor() {
        super();
        this.state = { 
            email: '', 
            password: '', 
            message: null , 
            errorToastr : {
                message : '' , 
                timeduaration : 0 
            }, 
            showLoader : {
                loadingLoader : 'hide'
            }
        }
    }

    handler(text, key) {
        let updateObj = Object.assign({}, this.state);
        updateObj['errorToastr']['message'] = '';
        updateObj['errorToastr']['timeduaration'] = 0;
        updateObj[key] = text;
        this.setState(updateObj)
    }

    loginUser() {
        if (this.state.email && this.state.password) {

            this._displayLoader('show');

            loginUser(this.state)
                .then(res => {
                    this._displayLoader('hide');
                    this.displayMessage('Login successfully' , 2000);
                    setkey_data({ 'KeyName': 'Id', 'KeyData': res.user._user.uid });
                    Actions.dashboard();

                }, err => {

                    this._displayLoader('hide');

                    if(err && err.message){
                        this.displayMessage("Error: "+err.message , 2000);
                    }else {
                        this.displayMessage("Invalid username and password"+err.message , 2000);
                    }
                })
        }else{
            this.displayMessage('Please enter email and password',2000)
        }
    }

    _displayLoader(key){
        let updateObj = Object.assign({},this.state);
        updateObj['showLoader']['loadingLoader'] = key ;
        this.setState(updateObj);
    }


    displayMessage(message , duration ){
        let updateObj = Object.assign({},this.state);
        updateObj['errorToastr']['message'] = message;
        updateObj['errorToastr']['timeduaration'] = duration;
        this.setState(updateObj);
    }

    render() {
        return (
            <ImageBackground source={ background } style={loginClass.backgroundImage} resizeMode="stretch">
                <Toastr errormessage={ this.state.errorToastr }/>
                <KeyboardAvoidingView style={loginClass.container} >
                    <View >
                        <View style={loginClass.imgParnt}>
                            <Text style={ loginClass.heading } style={ material.title }>Employee Tracking</Text>
                            <Image style={ loginClass.logoImage} source={ logo }/>
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
                        <View style={loginClass.cretaeAccountPrnt} >
                            <Text style={loginClass.createAccountCls} onPress={ () =>  Actions.signup() }>
                                Create Account
                            </Text>
                        </View>
                    </View>
                    
                    <View style={loginClass.loaderPrnt}>
                        <LoaderDisplay loader={ this.state.showLoader.loadingLoader } />
                        {
                            (this.state.showLoader.loadingLoader == 'show')?
                            <Text style={ loginClass.loaderText}>Loading...</Text>:null
                        }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}