import React from 'react';
import { View, StyleSheet, Switch  } from 'react-native';
import { Text, CheckBox } from 'react-native-elements';


const Todoinfo = ({route, completeTodo}) => {
  return (
    <View style={todo.wrap}>
      <Text style={todo.text}>{route.params.text}</Text>
      {/* <Switch
        value={route.params.completed}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={route.params.completed ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={() => completeTodo(route.params.id)}
      /> */}
      <CheckBox
        checked={route.params.id}
        onPress={() => completeTodo(route.params.id)}
      />
    </View>
  )
}

export default Todoinfo;


const todo = StyleSheet.create({
  wrap : {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    borderTopColor: '#bbbbbb',
    borderTopWidth: 1,
  },
  text: {
    marginTop :10,
    fontSize: 17,
    width: '95%',
    textAlign: 'center'
  }
});