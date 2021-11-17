import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native';
import { Input, Button, CheckBox } from 'react-native-elements';
import TodoItem from './TodoItem/TodoItem';

const Main = ({
  navigation,
  // text,
  todos,
  // onChangeValue,
  addNewTaskToServer,
  deleteTodo,
  completeTodo
}) => {
  const [text, setValue] = useState('');
  const onChangeValue = (text) => {
    setValue(text);
  }
  const handlerTask = (value) => {
    if(value.trim()) {
      addNewTaskToServer(value);
      setValue('');
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000"/>
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
        onPress={() => handlerTask(text)}
        style={styles.btn}
      />
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <TodoItem
            key={item._id}
            el={item}
            navigation={navigation}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
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
    backgroundColor: 'red'
  },
});

export default Main;