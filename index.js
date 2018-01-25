//Index.ios.js - place code in here for IOS!!!
//Import a library to help create component
import React from 'react';
import { AppRegistry, View } from 'react-native';

//importing components within the folder
import Header from './src/components/header';
//importing albumlist within the folder
import AlbumList from './src/components/AlbumList';


//Create a component
const App = () =>
{
    return(
        <View style={{flex: 1}}>
        <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>
    );
};

//Render it to the device
AppRegistry.registerComponent('albums', () => App);
