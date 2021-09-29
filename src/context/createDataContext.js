/* doing same thing which we do in BlogContext.js file, but in a automated fashion
need of this? becz in future when we add more functionality to the app like list of images, comments, etc 
we have to again create the duplicate of BlogContext.js all functions, reducer etc. */
import React, { useReducer } from 'react';


// pass in 3 things that actually needs to be customized anytime we create a context
export default (reducer, actions, initialState) => {
    // Context Object
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        
                        //key
        // actions === {addblogpost: (dispatch) => { return () => {} } }
         
        const boundActions = {}; //creating object
        /* boundActions naming indicates that we've processed all these actions and they are bound
        to the copy of dispatch(line 13). */

        //to iterate through that object:
        for (let key in actions){
            boundActions[key] = actions[key](dispatch);
            //boundActions.key = actions.key(dispatch)
                                //actions.key gives refrence of {key: (dispatch) => { return () => {} } }
            // key === 'addblogpost'
        }

        return <Context.Provider value={{ state, ...boundActions }}  >
            {children}
        </Context.Provider>
    };

    return { Context, Provider };

};

/* we made a reusable func that we can use several times inside our app to automate the process of 
setting up Context variable and Provider func */ 