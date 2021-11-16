import React from 'react';
import Main from "./components/Main";
import Todoinfo from "./components/Todoinfo";
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const Navigate = () => {
  return <NavigationContainer>
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="Main"
        component={Main}
        options={{title: 'Todolist'}}
      />
      <Stack.Screen
        name="Todoinfo"
        component={Todoinfo}
        options={{title: 'Todoinfo'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
};


export default Navigate;