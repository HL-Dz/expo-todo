import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, FlatList, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import uuid from 'react-native-uuid';
import { Header, Input, Button } from 'react-native-elements'
import TodoItem from './components/TodoItem/TodoItem';
import Icon from 'react-native-vector-icons/FontAwesome';


const App = () => {
  const [text, setValue] = useState('');
  const [todos,setTodos] = useState([]);
  
  const addNewTask = () => {
    if(text.trim()) {
      setTodos((list) => {
        return [
          {id: '1', completed: true, text: text, key: uuid.v1()},
          ...list
        ]
      })
      setValue('');
    }
  }
  
  const onChangeValue = (text) => {
    setValue(text);
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <StatusBar backgroundColor="redf" style="light" />
      <Header
        placement="center"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'TODOLIST', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />  
      <Input 
        style={styles.input}
        placeholder="Add new task..."
        value={text}
        onChangeText={onChangeValue}
      />
      <Button
        color="#00B358"
        title="Add"
        onPress={addNewTask}
        style={styles.btn}
      />
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem el={item}/>
        )}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  btn: {
    color: 'red',
  },
  input: {
    width: '100%',
    paddingTop: 5,
    paddingBottom: 5
  },
});
export default App;