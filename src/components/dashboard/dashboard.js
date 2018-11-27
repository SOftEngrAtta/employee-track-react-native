import React , { Component } from 'react';
import { View , Text , Button} from 'react-native';
import { Actions } from 'react-native-router-flux';

// service 
import { getkey_data } from '../../service/storage.service';
import { setkey_data , clearhistory } from '../../service/storage.service';


let userId = '';

export class Dashboard extends Component{

    componentDidMount(){
        getkey_data({KeyName : 'Id'}).then(res=>{ userId = res ; })       
    }

    logout(){
        clearhistory();
        Actions.login();
    }

    render(){
        return(
            <View>
                <Text>
                    Dashboard
                </Text>
                <Button onPress={()=>{ this.logout() }} title="Sign Out"/>
            </View>
        )
    }
}