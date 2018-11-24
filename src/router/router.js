// modules
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Router, Scene, Stack  } from 'react-native-router-flux';

// components 
import { Login } from '../components/authentication/login/login';
import { SignUp } from '../components/authentication/singup/signup';
import { Dashboard } from '../components/dashboard/dashboard';

export class Routers extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="login" component={Login}  initial />
                    <Scene key="singup" component={SignUp} title="signup"  />
                    <Scene key="dashboard" component={Dashboard} title="dashboard" />
                </Stack>
            </Router>
        )
    }
}