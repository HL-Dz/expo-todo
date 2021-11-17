import React from 'react';
import { View, StyleSheet  } from 'react-native';
import { Text } from 'react-native-elements';


const Todoinfo = ({route}) => {
  return (
    <View style={todo.wrap}>
      <Text style={todo.text}>{route.params.text}</Text>
    </View>
  )
}

export default Todoinfo;


const todo = StyleSheet.create({
  wrap : {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1,
    borderTopColor: '#bbbbbb',
    borderTopWidth: 1,
    padding: 10
  },
  text: {
    fontSize: 17,
    width: '85%',
    textAlign: 'center'
  }
});