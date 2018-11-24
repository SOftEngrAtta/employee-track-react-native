//modules
import React, { Component } from 'react';
import { Text } from 'react-native';
import * as firebase from 'react-native-firebase';
import { Container, Header, Content, Form, Item, Input, Button  } from 'native-base';
import { Actions } from 'react-native-router-flux'
// import { ToastStyles , s} from 'react-native-toaster'

//services
import { setkey_data } from '../../../service/storage.service';

//shared 
import DisplayMessage from '../../../shared/toastr.service'


const styleCss = {
    lgnBtn : { 'margin' : '1%' }
}

export class Login extends Component {

    constructor(){
        super();
        this.state = { email: '', password: '' , message : null}
    }

    handler(text , key){ 
        let updateObj = Object.assign({},this.state);
        updateObj[key] = text;
        this.setState(updateObj)
    }

    loginUser(){
        console.log(this.state);
        if(this.state.email && this.state.password){
            firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
            .then(res=>{
                let updateObj = Object.assign({},this.state);
                updateObj['message'] = {text : 'login successfully' };
                this.setState(updateObj)
                setkey_data({'KeyName': 'Id' , 'KeyData': success.user.uid});
                Actions.dashboard();
                
            },error=>{
                if(error && error.message){
                    ErrorMessage("Error: "+error.message)
                }else ErrorMessage('Invalid username and password'); 
            })
        }
    }

    render() {
        return (
            <Container>
                {
                    (this.state.message) ? <DisplayMessage message={ this.state.message }/>:null
                }
                <Content>
                    <Form>
                        <Item>
                            <Input type="text" placeholder="Email"  onChangeText={ (text)=>{ this.handler(text , 'email') } } value={ this.state.email } />
                        </Item>
                        <Item last>
                            <Input type="password" placeholder="Password" secureTextEntry={ true }  onChangeText={ (text)=>{ this.handler(text , 'password') } } value={ this.state.password }/>
                        </Item>
                        <Button style={ styleCss.lgnBtn } full light onPress={ () => this.loginUser() }>
                            <Text >Click Me!</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}