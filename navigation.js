import React from 'react';
import Main from "./components/Main";
import Todoinfo from "./components/Todoinfo";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Navigate = ({text, todos, onChangeValue, addNewTask, completeTodo, deleteTodo}) => {

  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        options={{title: 'Todolist'}}
      >
        {(props) => <Main
          {...props} 
          onChangeValue={onChangeValue}
          addNewTask={addNewTask}
          deleteTodo={deleteTodo}
          todos={todos}
          text={text}
        />}
      </Stack.Screen>
      <Stack.Screen
        name="Todoinfo"
        options={{title: 'Todoinfo'}}
      >
        {(props) => <Todoinfo
         {...props}
         completeTodo={completeTodo}
        />}
      </Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
};


export default Navigate;