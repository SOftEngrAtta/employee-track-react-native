import React, { Component } from 'react';
import { View, Text, Button, ImageBackground, Image, FlexStyle } from 'react-native';
import { Card } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import { material, robotoWeights } from 'react-native-typography';

//component
import { HeaderTab } from '../header/header';


// service 
import { getkey_data } from '../../service/storage.service';
import { setkey_data, clearhistory } from '../../service/storage.service';

//images
import background from '../../assets/background.jpg';
import usersview from '../../assets/users.png';
import groups from '../../assets/groups.png';
import report from '../../assets/report.png';
import tasks from '../../assets/tasks.jpg';


//css
import { dashboardClass } from './dashboardCls'


let userId = '';

export class Dashboard extends Component {

    componentDidMount() {
        getkey_data({ KeyName: 'Id' }).then(res => { userId = res; })
    }

    logout() {
        clearhistory();
        Actions.login();
    }

    render() {
        return (
            <ImageBackground source={background} style={dashboardClass.backgroundImage} resizeMode="stretch">
              
                    <View>
                        <HeaderTab title="Dashboard" />
                        <View style={dashboardClass.parntBody}>
                            <View style={dashboardClass.viewBody}>
                                <View style={dashboardClass.flexRow}>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={usersview} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                View Status
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 50 </Text>
                                        </View>
                                    </View>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={groups} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                Groups
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 10 </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={dashboardClass.viewBody}>
                                <View style={dashboardClass.flexRow}>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={report} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                Reports
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 15 </Text>
                                        </View>
                                    </View>
                                    <View style={dashboardClass.flexRowWidth}>
                                        <View style={dashboardClass.flexRowImagePrntDiv}>
                                            <View style={dashboardClass.flexRowImageDiv}>
                                                <Image source={tasks} style={dashboardClass.flexRowImage} />
                                            </View>
                                            <Text style={[dashboardClass.flexRowImageText, robotoWeights.bold]}>
                                                Tasks
                                        </Text>
                                        </View>
                                        <View style={dashboardClass.totalCountPrnt}>
                                            <Text style={dashboardClass.totalCount}> 20 </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
            </ImageBackground>
        )
    }
}
