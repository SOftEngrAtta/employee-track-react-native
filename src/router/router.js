import React , { Component } from "react";
import { Dimensions } from 'react-native';
import { createDrawerNavigator , createAppContainer , createStackNavigator } from "react-navigation";

//screens 
import { LoginComponent } from '../components/authentication/login/login';
import { SignUpComponent } from '../components/authentication/singup/signup';
import { HomeComponent } from '../components/dashboard/dashboard';
import { ProfileComponent } from '../components/profile/profile';

//drawer screen 
import { SideBarTab } from '../components/sidebar/sidebar'

const Drawer = createDrawerNavigator({
    Login: { screen: LoginComponent },
    SignUp: { screen: SignUpComponent },
    Home: { screen: HomeComponent },
    Profile: { screen: ProfileComponent }
},{
    initialRouteName: 'Home',
    contentComponent: SideBarTab
    // drawerWidth: Dimensions.get('window').width - 120,   
});

const AppNavigator = createStackNavigator({
    Drawer : { screen : Drawer}
},{
    initialRouteName: 'Drawer',
    headerMode: 'none'
})

const MyApp = createAppContainer(AppNavigator);

export  class Routers extends Component {
    render(){
        return <MyApp />
    }
}