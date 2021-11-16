import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native';
import { Input, Button, Header } from 'react-native-elements';
import TodoItem from './TodoItem/TodoItem';
import uuid from 'react-native-uuid';

const Main = ({navigation}) => {
  const [isApp, setIsApp] = useState(false);
  const [text, setValue] = useState('');
  const [todos,setTodos] = useState([
    {
      _id: '43243',
      text: 'LORem gfldkgjhdfslgj djkh dfjkh lfdjhglf kjhdslgkjf',
      comleted: false
    },
    {
      _id: '4325453',
      text: 'LORem gfldkgjhdfslgj djkfda fdasf dsaf dsaf dsf sdh dfjkh lfdjhglf kjhdslgkjf',
      comleted: false
    },
    {
      _id: '43242343243243',
      text: 'LORem gfldkgjhdfslgj djkh dfjkh lfdjhglf kjhdslgkjf',
      comleted: false
    },
    {
      _id: '432423435432543543',
      text: 'LORem gfldkgjhdfslgj djkh dfjkh lfdjhglf kjhdslgkjf',
      comleted: true
    }
  ]);

  
  const addNewTask = () => {
    if(text.trim()) {
      setTodos((list) => {
        return [
          {_id: uuid.v1(), completed: true, text: text},
          ...list
        ]
      })
      setValue('');
    }
  }

  const completeTodo = (id) => {
    setTodos((list) => {
      return list.map(elem => {
        if(elem._id !== id) {
            return elem
          } else {
            return {...elem, completed: !elem.completed}
          }
      })
    })
  }
  
  const onChangeValue = (text) => {
    setValue(text);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000"/>
      {/* <Header
        // leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Todo', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff'}}
        backgroundColor="#3a3a3a"
        barStyle="light-content"
      /> */}
      <Input 
        inputStyle={{
          textAlign: 'left',
          fontSize: 17,
        }}
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
        renderItem={({item, ind}) => (
          <TodoItem
            key={item._id}
            completeTodo={completeTodo}
            el={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  btn: {
  },
});

export default Main;