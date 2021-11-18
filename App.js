import React, { useState, useEffect } from "react";
import Stack from "./navigation";

const API = "http://192.168.100.82:5000";

const App = () => {
  const [todos, setTodos] = useState([]);

  // GET ALL TASKS
  const getAllTasks = async () => {
    const res = await fetch(`${API}/tasks`);
    const todos = await res.json();
    if (res.status === 200) {
      setTodos(todos);
    } else {
      console.log("Something wrong...");
    }
  };

  // ADD NEW TASK
  const addNewTask = async (text) => {
    const response = await fetch(`${API}/tasks`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
      }),
    });
    if (response.ok === true) {
      const task = await response.json();
      setTodos((list) => {
        return [task, ...list];
      });
    } else {
      console.log("Something wrong...");
    }
  };

  // COMPLETE THE TASK
  const completeTodo = async (id, completed) => {
    const res = await fetch(`${API}/tasks`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        completed: completed,
      }),
    });

    if (res.ok === true) {
      const task = await res.json();
      setTodos((prev) => {
        return prev.map((elem) => {
          if (elem._id !== task._id) {
            return elem;
          } else {
            return { ...elem, completed: !elem.completed };
          }
        });
      });
    } else {
      console.log("Something wrong...");
    }
  };

  // DELETE THE TASK
  const deleteTodo = async (id) => {
    const res = await fetch(`${API}/tasks/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    });

    if (res.ok === true) {
      const task = await res.json();
      setTodos((prev) => {
        return prev.filter((el) => el._id !== task._id);
      });
    } else {
      console.log("Something wrong...");
    }
  };

  useEffect(() => {
    getAllTasks();
  }, []);

  return (
    <Stack
      addNewTask={addNewTask}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      todos={todos}
    />
  );
};
export default App;
