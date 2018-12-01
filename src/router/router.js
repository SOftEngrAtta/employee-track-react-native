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




export class Routers extends Component {

    

    render() {
        return (
            <Router >
                <Stack key="root" hideNavBar>
                    <Scene key="login" component={Login}  title="login"  />
                    <Scene key="signup" component={SignUp}  title="signup" />
                    <Scene key="dashboard" component={Dashboard} title="dashboard" initial/>
                </Stack>
            </Router>
        )
    }
}