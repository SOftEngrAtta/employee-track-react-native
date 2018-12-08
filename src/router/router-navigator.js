// src\router\router-navigator.js

import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation";

// screens
import { Login } from '../components/authentication/login/login';
import { SignUp } from '../components/authentication/singup/signup';
import { Dashboard } from '../components/dashboard/dashboard';
// drawer
import { SideBarTab } from '../components/sidebar/sidebar';


const stackNav = createStackNavigator({
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Dashboard: { screen: Dashboard },
    Drawer: Drawer

}, {
        initialRouteName: "Login",
        headerMode: "none"
    });

const Drawer = createDrawerNavigator({
    Item1: { screen: stackNav }
}, {
        contentComponent: SideBarTab,
        drawerWidth: Dimensions.get('window').width - 120,
    });

const MyApp = createAppContainer(stackNav);


// your Root stack will always be a stacknavigator you dont need to use createDrawerNavigator
// as your Root ok
export class Routers extends Component {
    render() {
        return <MyApp />
    }
}