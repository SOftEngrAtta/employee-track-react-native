import React, { Component } from 'react';
import { View, TouchableHighlight, Image, Text } from 'react-native';

// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'


//image
import profileImage from '../../assets/profileImage.jpg';
import usersview from '../../assets/users.png';
import groups from '../../assets/groups.png';
import report from '../../assets/report.png';
import tasks from '../../assets/tasks.jpg';

//css
import { sideMenuCls } from './sidebarCls'


export class SideBarTab extends Component {

    render() {
        return (
            <View >
                    <View style={sideMenuCls.container} >
                        <View style={sideMenuCls.profileBanner}>
                            <TouchableHighlight onPress={ ()=> this.props.navigation.navigate('Login') }>
                                <View style={ sideMenuCls.signOut} >
                                    <Icon name="sign-out" size={20} color="#0778bdd1"/>
                                </View>
                            </TouchableHighlight>
                            
                            <View style={sideMenuCls.profileImagePrnt}>
                                <Image source={profileImage} style={sideMenuCls.profileImage} />
                            </View>
                            <View style={sideMenuCls.profileBannerText}>
                                <Text style={sideMenuCls.profileImageText}> Atta Ur Rehman </Text>
                            </View>
                            <View style={ sideMenuCls.displayDetail }>
                                <View  style={ sideMenuCls.displayDetailDiv }>
                                    <Image source={ usersview } style={ sideMenuCls.displayDetailDivImage }/>
                                    <Text style={ sideMenuCls.displayDetailDivText}>100</Text>
                                </View>
                                <View style={ sideMenuCls.displayDetailDiv }>
                                    <Image source={ groups } style={ sideMenuCls.displayDetailDivImage } />
                                    <Text style={ sideMenuCls.displayDetailDivText}>100</Text>
                                </View>
                                <View style={ sideMenuCls.displayDetailDiv }>
                                    <Image source={ report } style={ sideMenuCls.displayDetailDivImage } />
                                    <Text style={ sideMenuCls.displayDetailDivText}>100</Text>
                                </View>
                                <View style={ sideMenuCls.displayDetailDiv }>
                                    <Image source={ tasks } style={ sideMenuCls.displayDetailDivImage }  />
                                    <Text style={ sideMenuCls.displayDetailDivText}>100</Text>
                                </View>
                            </View>

                        </View>
                        <TouchableHighlight onPress={ ()=> this.props.navigation.navigate('Profile') }>
                            <View style={ sideMenuCls.pagesPortionPrnt }>
                                <Icon name="user" size={20} color="#fff" />
                                <Text style={{ color: '#fff', fontSize: 14, marginLeft: 25 }}> Profile </Text>
                            </View>
                        </TouchableHighlight>
                        
                        <View style={ sideMenuCls.pagesPortionPrnt }>
                            <Icon name="users" size={20} color="#fff" />
                            <Text style={{ color: '#fff', fontSize: 14, marginLeft: 20 }}> Groups </Text>
                        </View>
                    </View>
            </View>
        )
    }
}
