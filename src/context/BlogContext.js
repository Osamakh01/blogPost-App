import React, { useReducer } from 'react';

// react lib has a func called createContext, using this to create first context object
/* "BlogContext" this object is responsible for moving the information from Blog Post Provider
 down to child or nested child*/
// BlogContext is the Context Object
const BlogContext = React.createContext();

const blogReducer = () => {

};


export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);


    // goal of this func-> is to use our setter to in a new blog post to our blogPosts state varaible
    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post # ${blogPosts.length + 1}` }]);

    };
                                        // addBlogPost: addBlogpost equavalent to addBlogPost 
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        {/* some argument here */}
        {children}
        {/* this children is actually : <App /> from App.js*/}
    </BlogContext.Provider>
    // when we create BlogContext object we get something inside that object called .Provider
    // Provider is going to accept some information, its kind of source of information and whatever information
    // we provide it, its going to make available to all of our child components.

    /////** ACTUAL MECHANISM THATS GOIN TO MOVE SOME INFORMATION FROM BLOG POST PROVIDER DOWN TO A CHILD **/////
};
/* created a component named 'BlogProvider' that can accept another component, more or less as an argument
and that other argument is going to be shown inside of our BlogProvider */

export default BlogContext;