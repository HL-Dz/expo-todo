import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

const TodoItem = ({el}) => {
 return (
  <View style={styles.todo}>
   <CheckBox
    checked={el.checked}
    // title={el.completed ? 'Ok' : ''}
   />
   <TouchableOpacity>
    <Text>{el.text}</Text>
   </TouchableOpacity>
   <Button
    style={styles.btn_del}
    title="Del"
   />
  </View>
 )
};


const styles = StyleSheet.create({
 todo: {
   flex: 3,
   display: 'flex',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   width: '95%'
 },
 btn_del: {
 }
});


export default TodoItem;