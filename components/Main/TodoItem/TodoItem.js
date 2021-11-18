import React from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { Button, CheckBox } from "react-native-elements";
import { styles } from "./TodoStyles";

const TodoItem = ({ el, navigation, deleteTodo, completeTodo }) => {
  const deleteCurrentToto = () =>
    Alert.alert("Delete the task?", "", [
      {
        text: "Cancel",
        style: "cancel",
      },
      { text: "Delete", onPress: () => deleteTodo(el._id) },
    ]);

  return (
    <View style={el.completed ? styles.todoInactive : styles.todo}>
      <View style={styles.wrap}>
        <CheckBox
          checked={el.completed}
          onPress={() => completeTodo(el._id, !el.completed)}
        />
        <TouchableOpacity
          color={el.completed ? "grey" : "#000"}
          style={styles.touch}
          onPress={() =>
            navigation.navigate("Todoinfo", {
              text: el.text,
              completed: el.completed,
              id: el._id,
            })
          }
        >
          <Text numberOfLines={1} style={styles.text}>
            {el.text}
          </Text>
        </TouchableOpacity>
        <View>
          <Button
            title="Del"
            type="outline"
            titleStyle={{
              color: "#d67b7b",
            }}
            onPress={deleteCurrentToto}
          />
        </View>
      </View>
    </View>
  );
};

export default TodoItem;
