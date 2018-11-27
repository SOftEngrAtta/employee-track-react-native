// modules
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Stack , Actions  } from 'react-native-router-flux';

// components 
import { Login } from '../components/authentication/login/login';
import { SignUp } from '../components/authentication/singup/signup';
import { Dashboard } from '../components/dashboard/dashboard';

// services
import { getkey_data , setkey_data } from '../service/storage.service';
import { checkUser } from '../service/auth.service';

export class Routers extends Component {

    canActive(){
        getkey_data({ KeyName : 'Id' })
        .then(res=>{
            if(!res) Actions.login();
            else Actions.dashboard();
        })
    }

    getUser(Id){
        checkUser(Id)
        .then(res=>{
            console.log('checkuser => ', res);
            setkey_data({ 'KeyName': 'customerinfo', 'KeyData': JSON.stringify(res)})
        })
    }

    render() {
        return (
            <Router>
                <Stack key="root" hideNavBar="true">
                    <Scene key="login" component={Login}  title="login" initial onEnter={ () => this.canActive() } />
                    <Scene key="singup" component={SignUp} title="signup"  onEnter={ () => this.canActive() } />
                    <Scene key="dashboard" component={Dashboard} title="dashboard"  onEnter={ () => this.canActive() } />
                </Stack>
            </Router>
        )
    }
}