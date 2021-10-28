import React, { useState, useContext } from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find((blogPost) => blogPost.id === id);

    /*const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);*/


    return (
        /*<View>
            <Text>Edit Title: </Text>
            <TextInput value= {title} onChangeText={(newTitle) => setTitle(newTitle) } />

            <Text>Edit Content: </Text>
            <TextInput />
        </View>*/

        <BlogPostForm 
        initialValues= {{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            editBlogPost(id, title, content, () => { navigation.pop() } ); // pop() tells to go 1 screen back
            // id===navigation.getParam('id')
            // we can also pass in blogPost.id
        }} />
    );
};

const styles = StyleSheet.create({

});

export default EditScreen;