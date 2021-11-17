import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

const TodoItem = ({el, navigation, deleteTodo, completeTodo}) => {
  const deleteCurrentToto = () =>
    Alert.alert('Delete the task?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => deleteTodo(el._id) },
    ]);

 return (
  <View style={el.completed ? styles.todoInactive : styles.todo}>
   <View style={styles.wrap}>
    <CheckBox
      checked={el.completed}
      onPress={() => completeTodo(el._id)}
    />
    <TouchableOpacity color={el.completed ? 'grey' : '#000'}
     style={styles.touch} onPress={() => navigation.navigate('Todoinfo', {
      text: el.text,
      completed: el.completed,
      id: el._id,
      completeTodo
    })}>
      <Text numberOfLines={1} style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
    <View>
      <Button
        title="Del"
        type="outline"
        titleStyle={{
          color: '#d67b7b'
        }}
        onPress={deleteCurrentToto}
      />
    </View>
   </View>
  </View>
 )
};


const styles = StyleSheet.create({
 todo: {
   display: 'flex',
   marginTop: 10,
   backgroundColor: '#fff',
   borderRadius: 3,
 },
 todoInactive: {
   display: 'flex',
   marginTop: 10,
   backgroundColor: '#edfced',
   borderRadius: 3,
 },
 text: {
   display: 'flex',
   minWidth: '85%',
   maxWidth: '85%',
 },
 wrap: {
   display:'flex',
   alignItems: 'center',
   width: '90%',
   flexDirection: 'row'
 },
 touch: {
   display: 'flex',
   maxWidth: '90%',
 }
});


export default TodoItem;