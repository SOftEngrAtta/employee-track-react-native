import React, { Component } from 'react';
import { ImageBackground, Image, View, Text, Dimensions , TouchableHighlight} from 'react-native';
import { Input , Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

//components
import { HeaderComponent } from '../header/header';

//css
import { profileCls } from './profileCls'

//images 
import background from '../../assets/background.jpg';
import userImage from '../../assets/useimage.jpg';


let ScreenHeight = Dimensions.get("window").height;

const options = {
    title: 'My Photo',
    takePhotoButtonTitle: 'Take Photo From Camera',
    chooseFromLibraryButtonTitle: 'Choose Photo From Library '
};

export class ProfileComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            avatarSource: userImage
        }
    }

    getPhoto(data){
        debugger
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else {
              const source = { uri: response.uri };
          
              // You can also display the image using data:
              // const source = { uri: 'data:image/jpeg;base64,' + response.data };
          
              this.setState({
                avatarSource: source,
              });
            }
        });
    }

    render() {
        return (
            <ImageBackground source={background} style={profileCls.backgroundImage} resizeMode="stretch">
                <HeaderComponent title="Profle" getHistory={this.props} bgColor="#e74003" />
                <View style={ profileCls.profileImagePrnt }>
                    <Image source={ this.state.avatarSource } style={ profileCls.profileImage } />
                    <TouchableHighlight style={ profileCls.profileImageIcon } onPress={ ()=> this.getPhoto('select Image') }>
                        <Icon name="camera" size={30} color="#fff" />
                    </TouchableHighlight>
                    <Text style={{ color: "#fff", marginTop: 10 }} onPress={ ()=> this.getPhoto('select Image') }> Take a photo </Text>
                </View>
                <View style={{ height: ScreenHeight , flex: 1}}>
                    <View style={ profileCls.profileForm }>
                        <Input placeholder="FullName" placeholderTextColor="#e74003"  style={ profileCls.profileFormInput }/>    
                        <Input placeholder="Age"  placeholderTextColor="#e74003" style={ profileCls.profileFormInput }/>    
                        <Input placeholder="Email address" placeholderTextColor="#e74003"  style={ profileCls.profileFormInput }/>    
                        <Input placeholder="Contact number"  placeholderTextColor="#e74003" style={ profileCls.profileFormInput }/>    
                        <View style={ profileCls.profileFormBtnPrnt }>
                            <Button style={ profileCls.profileFormBtn }>
                                <Text style={{ color: "#fff" }}>
                                    Save
                                </Text>
                            </Button>
                        </View>
                    </View> 
                </View>
            </ImageBackground>
        )
    }
}