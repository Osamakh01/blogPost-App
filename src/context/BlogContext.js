import React, { useReducer } from 'react';
import createDataContext from './createDataContext'; // after extracting code from this, deleting 
// additional/repetitive code from this file.
import jsonServer from '../api/jsonServer';

// react lib has a func called createContext, using this to create first context object
/* "BlogContext" this object is responsible for moving the information from Blog Post Provider
 down to child or nested child*/
// BlogContext is the Context Object
//const BlogContext = React.createContext();

const blogReducer = (state, action) => {
    switch (action.type){
        case 'get_blogposts': 
            return action.payload;
            /*here we didnt do like: return [...state, action.payload ]
            reason: whenever we get back response from API, our assumption is that API is always the 
            total source of truth of information inside of our App means that is the total list of blogpost
            that we get back from API, so we dont try to add this new response onto any existing state
            instead we replace all of our existing state with it as its 100% correct information.*/
        case 'edit_blogpost' :
            return state.map( (blogPost) => {   //we're recieving blogPost that contains state elements
                return blogPost.id === action.payload.id
                ? action.payload    // action.payload is our edited post
                : blogPost;         // blogPost is our original state that contains previous posts
            });
        case 'delete_blogpost' :
            return state.filter((blogPost) => blogPost.id !== action.payload );
            /*filter func is goin to iterate all over the diff elements inside of our state array and run some
            child fuc. if we return a true value from this, then the given element will be returned inside 
            of an overall new array, if we return false, then its goin to be rejected.*/
/*      case 'add_blogpost':
            return [...state, { id: Math.floor(Math.random() * 99999), 
                title: action.payload.title, 
                content: action.payload.content }];         */
        default:
            return state;    
    }

};
// when we return something from blogReducer thats goin to cause our blogProvider to automatically rerender


const getBlogPosts = dispatch => {
    return async () => {    // async or await syntax becz we're goin to be making a network request 
        const response = await jsonServer.get('/blogposts');
        // response.data ===  [{}, {}, {}] array of object, where every object is our blogpost

        dispatch({type: 'get_blogposts', payload: response.data})
    };
};

// anytime this func is called, we're goin to dispatch an action object 
const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { title, content });
        //2nd argument would be the data that we want to send to our server
        
        // dispatch({type: 'add_blogpost', payload: {title, content}});
        if (callback){
             callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {    // when we call deleteBlogPost func to change data in diff components,
                        // actually inner func is called. thats why argument ID is passed into inner func.  
        
        await jsonServer.delete(`/blogposts/${id}`) //TemplateString to get ID inside & using backticks                        

        dispatch({type: 'delete_blogpost', payload: id});
    };
};

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        const response = await jsonServer.put(`/blogposts/${id}`, { title, content })
        //2nd argument would be the data that we want to send to our server i.e updated tilte and content

        dispatch({ type: 'edit_blogpost', payload: {id, title, content} });
        if (callback){
            callback();
        }
    };
}; 

// const editBlogPost = (dispatch) => (id, title, content, callback) => {
//     dispatch({ type: 'edit_blogpost', payload: {id, title, content} });
//     if (callback){
//         callback();
//     }
// };

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
export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts}, 
    [] //passing in by default object 
); 
/* passing in reducer, action object, initailState
and it gives back us our Context Object and the Provider(which is react component that makes all of our data
available to something else inside of application) */ 
// destructuring Context, Provider that comes from calling createDataContext()