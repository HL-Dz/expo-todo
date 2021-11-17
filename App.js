import React, { useState } from 'react';
import Stack from './navigation';
import uuid from 'react-native-uuid';

const App = () => {
  const [text, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const onChangeValue = (text) => {
    setValue(text);
  }

  const addNewTask = () => {
    if(text.trim()) {
      setTodos((list) => {
        return [
          {_id: uuid.v1(), completed: false, text: text},
          ...list
        ]
      })
      setValue('');
    }
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
  
  return (
    <Stack 
      onChangeValue={onChangeValue}
      addNewTask={addNewTask}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      text={text}
      todos={todos}
    />
  );
}
export default App;