import React, { Component } from 'react';
import { View, Image } from 'react-native';
import loader from '../assets/loading.gif';

//css 
import { SharedCss } from './generic.sharedCss'

export class LoaderDisplay extends Component {
    
    constructor(){ 
        super();
        this.state = { displayLoader : 'hide' }
    }

    componentWillReceiveProps(nextProps){
        let loaderDisplay = nextProps.loader;
        if( loaderDisplay == 'show' ) {
            this.setState({
                displayLoader : (loaderDisplay)?loaderDisplay:false
            })
        }else{
            this.setState({
                displayLoader : false
            })
        }
    }
    
    render() {
        return <View>
            {
                ( this.state.displayLoader == 'show' )?
                <Image source={ loader } style={ SharedCss.loaderClas }/>: null
            }
        </View>
    }
}
