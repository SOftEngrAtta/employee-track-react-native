import React , { Component } from "react";
import { Dimensions } from 'react-native';
import { createDrawerNavigator , createAppContainer } from "react-navigation";

//screens 
import { LoginComponent } from '../components/authentication/login/login';
import { SignUpComponent } from '../components/authentication/singup/signup';
import { DashboardComponent } from '../components/dashboard/dashboard';
import { ProfileComponent } from '../components/profile/profile';

//drawer screen 
import { SideBarTab } from '../components/sidebar/sidebar'

const Drawer = createDrawerNavigator({
    Login: { screen: LoginComponent },
    SignUp: { screen: SignUpComponent },
    Dashboard: { screen: DashboardComponent },
    Profile: { screen: ProfileComponent }
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