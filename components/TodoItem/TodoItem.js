import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { Button, CheckBox } from 'react-native-elements';

const TodoItem = ({el, completeTodo, navigation}) => {
  const createTwoButtonAlert = () =>
    Alert.alert('Delete todo', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => console.log('OK Pressed') },
    ]);
  
 return (
  <View style={styles.todo}>
   {/* <CheckBox
    checked={el.checked}
    onPress={() => {completeTodo(el.key)}}
    checked={el.completed}
    title={el.completed ? 'Ok' : ''}
    checkedColor='green'
   /> */}
   <View style={styles.wrap}>
    <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Todoinfo', {
      text: el.text,
      completed: el.completed
    })}>
      <Text numberOfLines={1} style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
    <Button
      title="Del"
      type="outline"
      titleStyle={{
        color: '#db4a4a'
      }}
      onPress={createTwoButtonAlert}
    />
   </View>
  </View>
 )
};


const styles = StyleSheet.create({
 todo: {
   flex: 0,
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   padding: 5,
   borderBottomColor: '#bbbbbb',
   borderBottomWidth: 1
 },
 text: {
   display: 'flex',
   marginRight: 10,
   paddingTop: 12,
   minWidth: '90%',
   maxWidth: '90%',
 },
 wrap: {
   display:'flex',
   flexDirection: 'row'
 },
 link: {
   display: 'flex',
   maxWidth: '90%',
 }
});


export default TodoItem;