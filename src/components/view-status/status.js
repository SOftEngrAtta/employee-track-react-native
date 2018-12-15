import React, { Component } from 'react';
import { View, Text, Picker, AppState } from 'react-native'

import PushNotification from 'react-native-push-notification';

import { HeaderComponent } from '../header/header';
// import { PushController } from './pushController'

export class StatusComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { seconds: 5 }
    }

    componentDidMount() {
        
        AppState.addEventListener('change', this.handlerStateChange);
    }

    componentWillMount() {
        AppState.removeEventListener('change', this.handlerStateChange);
    }

    handlerStateChange = (appState) => {
        if (appState == 'background') {
            console.log('app is in background ', this.state.seconds);
            let date = new Date(Date.now() + (this.state.seconds * 1000));

            PushNotification.localNotificationSchedule({
                message: "My Notification Message",
                date,
            });
        }
    }


    render() {
        return (
            <View >
                <HeaderComponent title="Status" getHistory={this.props} bgColor="#e74003" />
                <View >
                    <Text> Hello </Text>
                    <Picker style={{ width: 100 }}
                        selectedValue={this.state.seconds}
                        onValueChange={(seconds) => this.setState({ seconds })}>
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="10" value={10} />
                        <Picker.Item label="15" value={15} />
                    </Picker>
                    {/* <PushController /> */}
                </View>
            </View>
        )
    }
}