import React, { Component } from 'react';
import { Text, View } from 'react-native';

import AppLoading from 'expo-app-loading';
import* as Font from 'expo-font';

let customFont={'Bubblegum-Sans':require('../assets/font/BubblegumSans-Regular.ttf'),};

export default class Feed extends Component {

    constructor(props){
        super(props);
        this.state={fontsLoaded:false,};
    }
    async_loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({fontsLoaded:true});
    }
    componentDidMount()
    {
        this.async_loadFontsAsync();
    }
    render() {
        if(!this.state.fontsLoaded){
            return<AppLoading/>;
        }
        else
        {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Feeds</Text>
            </View>
        )
    }
  }
}