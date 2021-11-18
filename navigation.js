import React from "react";
import Main from "./components/Main/Main";
import Todoinfo from "./components/TodoInfo/Todoinfo";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();
const Navigate = ({ todos, addNewTask, completeTodo, deleteTodo }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" options={{ title: "Todolist" }}>
          {(props) => (
            <Main
              {...props}
              addNewTask={addNewTask}
              deleteTodo={deleteTodo}
              todos={todos}
              completeTodo={completeTodo}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Todoinfo" options={{ title: "Todoinfo" }}>
          {(props) => <Todoinfo {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
