//modules
import React, { Component } from 'react';
import { View, KeyboardAvoidingView , Text, ImageBackground , Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { material , robotoWeights } from 'react-native-typography';

import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

//services
import { createAccount} from '../../../service/auth.service'

// shared
import { Toastr } from '../../../shared/toastr.service';
import { LoaderDisplay } from '../../../shared/loader.service'

//css
import { signUpClass } from './signupCss'

//images
import logo from '../../../assets/logo.png';
import background from '../../../assets/background.jpg';


export class SignUp extends Component {

    constructor() {
        super();
        this.state = { 
            email : '',
            password : '',
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

    createAccount() {
        debugger
        if (this.state.email && this.state.password) {

            this._displayLoader('show');

            createAccount(this.state)
                .then(res => {
                    this._displayLoader('hide');
                    this.displayMessage('Create account successfully' , 2000);
                    Actions.login();
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
            <ImageBackground source={ background } style={signUpClass.backgroundImage} resizeMode="stretch">
                <Toastr errormessage={ this.state.errorToastr }/>
                <KeyboardAvoidingView style={signUpClass.container} >
                    <View >
                        <View style={signUpClass.imgParnt}>
                            <Text style={ signUpClass.heading } style={ material.title }>Employee Tracking</Text>
                            <Image style={ signUpClass.logoImage} source={ logo }/>
                        </View>                        
                        <Item>
                            <Input type="email" placeholder="Email" onChangeText={(text) => { this.handler(text, 'email') }} value={this.state.email} />
                        </Item>
                        <Item last>
                            <Input type="password" placeholder="Password" onChangeText={(text) => { this.handler(text, 'password') }} value={this.state.password} />
                        </Item>
                        
                        <Button style={signUpClass.createAccnt} full success onPress={() => this.createAccount()}>
                            <Text style={signUpClass.createAccnt.Text}>Create Account</Text>
                        </Button>
                    </View>
                    <View style={signUpClass.loginPrnt} >
                        <Text style={signUpClass.loginCls} onPress={ () =>  Actions.login() }>
                            Sign In
                        </Text>
                    </View>

                    <View style={signUpClass.loaderPrnt}>
                        <LoaderDisplay loader={ this.state.showLoader.loadingLoader } />
                        {
                            (this.state.showLoader.loadingLoader == 'show')?
                            <Text style={ signUpClass.loaderText}>Loading...</Text>:null
                        }
                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        )
    }
}