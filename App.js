import React from 'react';

import ToDoList from './ToDoList';
import Settings from './Settings';
import store from "./store"
import {Provider} from "react-redux"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator();



export default function App() {
  return(
    <Provider store={store}>
    <NavigationContainer> 
      
      <Stack.Navigator> 
        <Stack.Screen
          name='List'
          component={ToDoList}
          options={{title:"My List"}}
        />
        
        <Stack.Screen
          name='Settings'
          component={Settings}
          options={{title:"Settings"}}
        />
        



      </Stack.Navigator>


    </NavigationContainer>
     </Provider>
   
  )
}