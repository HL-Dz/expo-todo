import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList } from 'react-native';
import { Input, Button} from 'react-native-elements';
import TodoItem from './TodoItem/TodoItem';

const Main = ({
  navigation,
  text,
  todos,
  onChangeValue,
  addNewTask,
  deleteTodo,
  completeTodo
}) => {
  
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
        onPress={addNewTask}
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