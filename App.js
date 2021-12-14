import React, { useState, useEffect } from "react";
import Stack from "./navigation";

const API = "http://192.168.100.82:5000";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);
  const [errMessage, setErrMessage] = useState('');

  // GET ALL TASKS
  const getAllTasks = async () => {
    setError(false);
    setErrMessage('');
    try {
      const res = await fetch(`${API}/tasks`);
      const todos = await res.json();
      setTodos(todos);
    } catch (err) {
      setError(true);
      setErrMessage(err.message)
    }
  };

  // ADD NEW TASK
  const addNewTask = async (text) => {
    setError(false);
    setErrMessage('');
    try {
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
      const task = await response.json();
      setTodos((list) => {
        return [task, ...list];
      });
    } catch (errr) {
      setError(true);
      setErrMessage(err.message)
    }
  };

  // COMPLETE THE TASK
  const completeTodo = async (id, completed) => {
    setError(false);
    setErrMessage('');
    try {
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
    } catch (err) {
      setError(true);
      setErrMessage(err.message)
    }
  };

  // DELETE THE TASK
  const deleteTodo = async (id) => {
      setError(false);
      setErrMessage('')
    try {
      const res = await fetch(`${API}/tasks/${id}`, {
        method: "DELETE",
        headers: { Accept: "application/json" },
      });
      const task = await res.json();
      setTodos((prev) => {
        return prev.filter((el) => el._id !== task._id);
      });
    } catch (err) {
      setError(true);
      setErrMessage(err.message)
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
