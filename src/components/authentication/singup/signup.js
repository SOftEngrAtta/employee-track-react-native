//modules
import React, { Component } from 'react';
import { View, KeyboardAvoidingView , Text, ImageBackground , Image , ToastAndroid} from 'react-native';
import { Icon } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { material , robotoWeights } from 'react-native-typography';

import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
// import { Actions } from 'react-native-router-flux';

//services
import { createAccount} from '../../../service/auth.service'

// shared
import { LoaderDisplay } from '../../../shared/loader.service'

//css
import { signUpClass } from './signupCss'

//images
import logo from '../../../assets/logo.png';
import background from '../../../assets/background.jpg';


export class SignUpComponent extends Component {

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
        if (this.state.email && this.state.password) {

            this._displayLoader('show');

            createAccount(this.state)
                .then(res => {
                    this._displayLoader('hide');
                    ToastAndroid.show('Create account successfully' , ToastAndroid.SHORT);
                    // Actions.login();
                }, err => {
                    this._displayLoader('hide');
                    if(err && err.message){
                        ToastAndroid.show("Error: "+err.message , ToastAndroid.SHORT);
                    }else {
                        ToastAndroid.show("Invalid username and password"+err.message , ToastAndroid.SHORT);
                    }
                })
        }else{
            ToastAndroid.show('Please enter email and password', ToastAndroid.SHORT)
        }
    }

    _displayLoader(key){
        let updateObj = Object.assign({},this.state);
        updateObj['showLoader']['loadingLoader'] = key ;
        this.setState(updateObj);
    }



    render() {
        return (
            <ImageBackground source={ background } style={signUpClass.backgroundImage} resizeMode="stretch">
             
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
                        <Text style={signUpClass.loginCls}>
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