import React, { useContext, useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
    /*const [title, setTitle] = useState('');
    const [content, setContent] = useState('');*/

    const {addBlogPost} = useContext(Context);

    /* even thou we are centralizing all of our states using Context, here we can still have local state inside
    of 1 single component to control the text thats being entered inside there.*/
    // Remember, this process of adding in some state to a TextInput is reffered to as CONTROLLED INPUT
    /*return (
        <View>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput style={styles.input} value={title} onChangeText={(text) => setTitle(text)} />
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.input} value={content} onChangeText={(text) => setContent(text)} />

            <Button title='Add Blog Post' 
            onPress={() => {
                // adding callback func in 3rd argument
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
                /* so now after finally successfully saving the blogPost or dispatching the action to save
                the blogPost, then we can go ahead and invoke this callback, which would actually
                navigate us back to IndexScreen page */
    /// this is not neccessary for this app as we are not saving our post to some outiside API ///
           /* }}
            />
        /*</View>
    );*/

    //*******///////***     Moving all the code to Resuable Component i.e BlogPostForm.js     ***/////// */ */


    // whenever our Form gets submitted, i want blogPostForm to invoke this onSubmit prop
    // (title, content) are the arguments passed in, that i enter while creating a new title and content
    return(
        <BlogPostForm onSubmit={(title, content) => {
            //passing title and content to addBlogPost() that was provided to our callback func line42
            addBlogPost(title, content, () => navigation.navigate('Index'));  
        }} />
    );
};

const styles= StyleSheet.create({
    /*input:{
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }*/
});

export default CreateScreen;