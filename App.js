import React from 'react';  // importing becz we are using JSX below inside export default func.
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { BlogProvider } from './src/context/BlogContext'; /* curly braces becz we exported blogProvider direct
instead of using export default */ 


const navigator = createStackNavigator(
  {  // 2 arguments, 1st is app route configuration object
    Index: IndexScreen,
  }, 
  {  // 2nd argument here, some configuration options for our stack navigator
    initialRouteName: 'Index',
    defaultNavigationOptions: { // its goin to set title inside of our header
      title: 'Blogs'
    }
  }
);

// export default createAppContainer(navigator);
/*createAppContainer func essentially creates a default app component/react component and displays whatever
content navigator is producing inside of that component
in another words createAppContainer just makes sure we actually exports a component from this file.*/

const App = createAppContainer(navigator);

export default () => {
  return <BlogProvider>
    <App />
  </BlogProvider>
}
// added children thing, becz we make sure that when we display blogProvider, its going to display 
// our App component inside of it.
// Now we're passing <App /> in as a child to blogProvider

/* rather than exporting app directly from createAppContainer, we now simply wrapped it inside of our
own custom component */