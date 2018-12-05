import React , { Component } from "react";
import { Dimensions } from 'react-native';
import { createDrawerNavigator , createAppContainer } from "react-navigation";

import { LoginComponent } from '../components/authentication/login/login';
import { SignUpComponent } from '../components/authentication/singup/signup';
import { DashboardComponent } from '../components/dashboard/dashboard';
import { SideBarTab } from '../components/sidebar/sidebar'

const Drawer = createDrawerNavigator({
    Login: { 
        screen: LoginComponent ,
        navigationOptions: {
            drawerLockMode: 'locked-closed',
        }
    },
    SignUp: { 
        screen: SignUpComponent 
    },
    Dashboard: { 
        screen: DashboardComponent 
    }
},{
    contentComponent: SideBarTab,
    drawerWidth: Dimensions.get('window').width - 120,   
});

const MyApp = createAppContainer(Drawer);

export  class Routers extends Component {
    render(){
        return <MyApp />
    }
}