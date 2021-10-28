import React from 'react';  // importing becz we are using JSX below inside export default func.
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from './src/context/BlogContext'; /* curly braces becz we exported blogProvider direct
instead of using export default */ 
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';


const navigator = createStackNavigator(
  {  // 2 arguments, 1st is app route configuration object
    Index: IndexScreen,
    Show: ShowScreen, 
    Create: CreateScreen,
    Edit: EditScreen,
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
  return <Provider>
    <App />
  </Provider>
}
// added children thing, becz we make sure that when we display blogProvider, its going to display 
// our App component inside of it.
// Now we're passing <App /> in as a child to blogProvider

/* rather than exporting app directly from createAppContainer, we now simply wrapped it inside of our
own custom component */