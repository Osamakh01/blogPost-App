import React, { useContext } from 'react'; /* useContext is a func thats goin to say: look at some 
context object and give us access to that thing Value prop inside BlogContext.js */
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity, Touchable, TouchableOpacityBase } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    //const blogPosts = useContext(BlogContext);
    // calling useContext and putting in the BlogContext i.e Context Object & its goin to give us the value prop
    // blogPosts = {data: blogPosts, addBlogPost: () => {} }
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);

    return (
        <View>
            
            <View style={{borderBottomWidth:2}} >
                <Button title='Add Post' onPress={addBlogPost} />
                </View>
    
            <FlatList 
                data={state} 
                keyExtractor={(blogPost) => blogPost.title }
                renderItem= {({ item }) => {
                    return (
                        <TouchableOpacity onPress={()=> navigation.navigate('Show' , { id: item.id }) }>
                            <View style={styles.row}>
                                <Text style={styles.title} >{item.title} - {item.id}</Text>
                                <TouchableOpacity onPress={()=> deleteBlogPost(item.id)}> 
                                    <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }
            }
            />
        </View>
    );    
};

//its a direct reference to our functional component, inside of it we're goin to return an object
IndexScreen.navigationOptions = () => {
    return {
        headerRight: () =>( 
            <TouchableOpacity>
                <Feather name="plus" size={24} />
            </TouchableOpacity>
        )
    };
    /* whenever our IndexScreen is about to be displayed by React navigation, react navigation will
    automatically call this func that we just assigned to navigationOptions and it'll inspect the object 
    that we return. 
    we can use this object to customize diff things that are displayed inside of our header
    */
}
/*
return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };*/

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',   //to get list and icon on the same line
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 2
    },
    title:{
        fontSize: 18,
        
    },
    icon:{
        fontSize: 24,
    }
});

export default IndexScreen;