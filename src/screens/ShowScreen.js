import React, { useContext } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Entypo } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    //find() is another helper func, we can pass in a func to it.its called with every blogPost inside of it
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id') );   
    //1st when we return true, we're goin to take whatever blogPost we find and assign it to that
    // variable i.e blogPost   
    

    return (
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    );
};

// anytime we want to show something inside of our header, we're goin underneath our component and add navigationOptions
// this func is goin to return a configuration object thats goin to somehow customize our header.
ShowScreen.navigationOptions =({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') } )}>
                <Entypo name='edit' size={24} style={{paddingRight: 2}} />    
            </TouchableOpacity>
        )

    };
};


const styles= StyleSheet.create({

});

export default ShowScreen;