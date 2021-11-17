import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';
import { Button } from 'react-native-elements';

const TodoItem = ({el, navigation, deleteTodo}) => {
  const deleteCurrentToto = () =>
    Alert.alert('Delete the task?', '', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => deleteTodo(el._id) },
    ]);

 return (
  <View style={styles.todo}>
   <View style={styles.wrap}>
    <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Todoinfo', {
      text: el.text,
      completed: el.completed,
      id: el._id
    })}>
      <Text numberOfLines={1} style={styles.text}>{el.text}</Text>
    </TouchableOpacity>
    <Button
      title="Del"
      type="outline"
      titleStyle={{
        color: '#db4a4a'
      }}
      onPress={deleteCurrentToto}
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
   borderBottomWidth: 1,
   marginTop: 5,
 },
 text: {
   display: 'flex',
   marginRight: 10,
   paddingTop: 12,
   minWidth: '95%',
   maxWidth: '95%',
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