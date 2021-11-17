import React, { useState, useEffect } from 'react';
import Stack from './navigation';
import uuid from 'react-native-uuid';

const App = () => {
  const [text, setValue] = useState('');
  const [todos, setTodos] = useState([]);
  let clean = false;

  const onChangeValue = (text) => {
    setValue(text);
  }

  const addNewTask = (task) => {
    setTodos((list) => {
      return [
        task,
        ...list
      ]
    })
  }

  const completeTodo = (id) => {
    setTodos((prev) => {
      return prev.map((elem) => {
        if(elem._id !== id) {
          return elem;
        } else {
          return {...elem, completed: !elem.completed}
        }
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos(prev => {
      return prev.filter(el => el._id !== id);
    })
  }

  const getAllTasks = async () => {
    const res = await fetch('/tasks', {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    })
    if(res.ok == true) {
      const tasks = await res.json();
      setTodos(tasks)
    } else {
      console.log('Something wrong...');
    }
  }

  const addNewTaskToServer = async (text) => {
    const response = await  fetch('/tasks', {
      method: 'POST',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: text
      })
    });
    if(response.ok === true) {
      const task = await response.json();
      addNewTask(task)
    } else {
      console.log('Something wrong');
    }
  }

  useEffect(() => {
    getAllTasks()
    return () => {clean = true}
  }, [])
  
  return (
    <Stack 
      onChangeValue={onChangeValue}
      addNewTaskToServer={addNewTaskToServer}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      text={text}
      todos={todos}
    />
  );
}
export default App;