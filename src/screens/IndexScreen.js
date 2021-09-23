import React, { useContext } from 'react'; /* useContext is a func thats goin to say: look at some 
context object and give us access to that thing Value prop inside BlogContext.js */
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
    //const blogPosts = useContext(BlogContext);
    // calling useContext and putting in the BlogContext i.e Context Object & its goin to give us the value prop
    // blogPosts = {data: blogPosts, addBlogPost: () => {} }
    const {data, addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>IndexScreen here</Text>
            <Button title='Add Post' onPress={addBlogPost} />
            <FlatList 
                data={data} 
                keyExtractor={(blogPost) => blogPost.title }
                renderItem= {({ item }) => {
                    return <Text>{item.title}</Text>
                }
            }
            />
        </View>
    );    
};

const styles = StyleSheet.create({

});

export default IndexScreen;