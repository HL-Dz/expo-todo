import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from "react-native";
import { Input, Button } from "react-native-elements";
import TodoItem from "./TodoItem/TodoItem";
import { styles } from "./MainStyles";

const Main = ({ navigation, todos, addNewTask, deleteTodo, completeTodo }) => {
  const [text, setValue] = useState("");

  const onChangeValue = (text) => {
    setValue(text);
  };
  const addTaskHandler = (text) => {
    if (text.trim()) {
      addNewTask(text);
      setValue("");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#000" />
      <Input
        inputStyle={{
          textAlign: "left",
          fontSize: 17,
        }}
        placeholder="Add new task..."
        value={text}
        onChangeText={onChangeValue}
      />
      <Button
        color="#00B358"
        title="Add"
        onPress={() => addTaskHandler(text)}
        style={styles.btn}
      />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
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
};

export default Main;
