import React, { Component } from "react";
import { Dimensions } from 'react-native';
import { createDrawerNavigator, createAppContainer, createStackNavigator } from "react-navigation";

//screens 
import { LoginComponent } from '../components/authentication/login/login';
import { SignUpComponent } from '../components/authentication/singup/signup';
import { HomeComponent } from '../components/dashboard/dashboard';
import { ProfileComponent } from '../components/profile/profile';

//drawer screen 
import { SideBarTab } from '../components/sidebar/sidebar'

const AppStack = createStackNavigator({
    Login: { screen: LoginComponent },
    SignUp: { screen: SignUpComponent },
    Home: { screen: HomeComponent },
    Profile: { screen: ProfileComponent }
}, {
        initialRouteName: 'Login',
        headerMode: 'none'
        // drawerWidth: Dimensions.get('window').width - 120,   
    });


const DrawerStack = createDrawerNavigator(
    {
        Main: AppStack
    },
    {
        contentComponent: SideBarTab,
        headerMode: 'none'
        // initialRouteName: 'SelectInterpreterScreen'
    }
);

const AppNavigator = createStackNavigator({
    Drawer: { screen: DrawerStack }
}, {
        initialRouteName: 'Drawer',
        headerMode: 'none'
    })

const MyApp = createAppContainer(AppNavigator);

export class Routers extends Component {
    render() {
        return <MyApp />
    }
}