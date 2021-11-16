import React from 'react';
import { View, StyleSheet, Switch  } from 'react-native';
import { Text, CheckBox } from 'react-native-elements';


const Todoinfo = ({route}) => {
  return (
    <View style={todo.wrap}>
      <Text>{route.params.text}</Text>
      {/* <CheckBox
        checked={route.checked}
        // onPress={() => {completeTodo(route._id)}}
        checked={route.completed}
        title={route.completed ? 'Ok' : ''}
        checkedColor='green'
      /> */}
      <Switch
        value={route.completed}
      />
    </View>
  )
}

export default Todoinfo;


const todo = StyleSheet.create({
  wrap : {
    display: 'flex',
    justifyContent: 'center'
  }
});