import React, { useReducer } from 'react';
import createDataContext from './createDataContext'; // after extracting code from this, deleting 
// additional/repetitive code from this file.

// react lib has a func called createContext, using this to create first context object
/* "BlogContext" this object is responsible for moving the information from Blog Post Provider
 down to child or nested child*/
// BlogContext is the Context Object
//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type){
        case 'delete_blogpost' :
            return state.filter((blogPost) => blogPost.id !== action.payload );
            /*filter func is goin to iterate all over the diff elements inside of our state array and run some
            child fuc. if we return a true value from this, then the given element will be returned inside 
            of an overall new array, if we return false, then its goin to be rejected.*/
        case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 99999), title: `Blog Post # ${state.length + 1}` }];
        default:
            return state;    
    }

};
// when we return something from blogReducer thats goin to cause our blogProvider to automatically rerender

// anytime this func is called, we're goin to dispatch an action object 
const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blogpost'});
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {    // when we call deleteBlogPost func to change data in diff components,
                        // actually inner func is called. thats why argument ID is passed into inner func.  
        dispatch({type: 'delete_blogpost', payload: id});
    };
};

/*export const BlogProvider = ({ children }) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);


    // anytime this func is called, we're goin to dispatch an action object 
    const addBlogPost = () => {
        dispatch({type: 'add_blogpost'});

    };

    //any data we want to share with the rest of our app is goin to be avail on VALUE prop 
                                        // addBlogPost: addBlogpost equavalent to addBlogPost 
    return <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
         some argument here */
    //    {children}
      //  {/* this children is actually : <App /> from App.js*/}
    // </BlogContext.Provider>
    // when we create BlogContext object we get something inside that object called .Provider
    // Provider is going to accept some information, its kind of source of information and whatever information
    // we provide it, its going to make available to all of our child components.

    /////** ACTUAL MECHANISM THATS GOIN TO MOVE SOME INFORMATION FROM BLOG POST PROVIDER DOWN TO A CHILD **/////
//};
/* created a component named 'BlogProvider' that can accept another component, more or less as an argument
and that other argument is going to be shown inside of our BlogProvider */

//export default BlogContext;

                                                                //action object
export const { Context, Provider } = createDataContext(blogReducer, {addBlogPost, deleteBlogPost}, [])
/* passing in reducer, action object, initailState
and it gives back us our Context Object and the Provider(which is react component that makes all of our data
available to something else inside of application) */ 
// destructuring Context, Provider that comes from calling createDataContext()