import React, { useContext } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);

    //find() is another helper func, we can pass in a func to it.its called with every blogPost inside of it
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id') );   
    //1st when we return true, we're goin to take whatever blogPost we find and assign it to that
    // variable i.e blogPost   
    


    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles= StyleSheet.create({

});

export default ShowScreen;