import React, { Component } from 'react';
import { ImageBackground, Image, View, Text, Dimensions } from 'react-native';
import { Input , Content, Form, Item, Label, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'

//components
import { HeaderComponent } from '../header/header';

//css
import { profileCls } from './profileCls'

//images 
import background from '../../assets/background.jpg';
import userImage from '../../assets/useimage.jpg';
import cristmistree from '../../assets/cristmisTress.jpg'


let ScreenHeight = Dimensions.get("window").height;

export class ProfileComponent extends Component {
    render() {
        return (
            <ImageBackground source={background} style={profileCls.backgroundImage} resizeMode="stretch">
                <HeaderComponent title="Profle" getHistory={this.props} bgColor="#e74003" />
                <View style={{ width: "100%", height: ScreenHeight / 3, resizeMode: 'cover', top: -1, backgroundColor: '#e74003', justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={userImage} style={{ width: 100, height: 100, borderRadius: 100, borderRadius: 100, borderWidth: 2, borderColor: '#fff' }} />
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Icon name="camera" size={30} color="#fff" />
                        <Text style={{ color: "#fff", marginTop: 10 }}> Take a photo </Text>
                    </View>
                </View>
                {/* <ImageBackground source={cristmistree} style={{ flex: 1, width: null, height: ScreenHeight, backgroundColor: 'red' }}> */}
                {/* <View style={{ backgroundColor: '#000', width: null, height: ScreenHeight, opacity: 0.5, top: -1 }}> */}
                <View style={{ height: ScreenHeight , flex: 1}}>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0 , justifyContent: 'center' , alignItems: 'center', width: null}}>
                        <Input placeholder="FullName"  style={{ fontSize: 14,color: '#e74003', borderBottomColor: '#e74003'  , borderBottomWidth : 2, height: 40, width: null, marginTop: 5,padding: 2, width: "80%"}}/>    
                        <Input placeholder="Age"  style={{ fontSize: 14,color: '#e74003', borderBottomColor: '#e74003'  , borderBottomWidth : 2, height: 40, width: null, marginTop: 5,padding: 2, width: "80%"}}/>    
                        <Input placeholder="Email address"  style={{ fontSize: 14,color: '#e74003', borderBottomColor: '#e74003'  , borderBottomWidth : 2, height: 40, width: null, marginTop: 5,padding: 2, width: "80%"}}/>    
                        <Input placeholder="Contact number"  style={{ fontSize: 14,color: '#e74003', borderBottomColor: '#e74003'  , borderBottomWidth : 2, height: 40, width: null, marginTop: 5,padding: 2, width: "80%"}}/>    
                        
                    </View> 
                    {/* <Content>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </Form>
                    </Content> */}

                </View>
                {/* </ImageBackground> */}
            </ImageBackground>
        )
    }
}