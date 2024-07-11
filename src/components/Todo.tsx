import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../Redux Toolkit/store';
import { addTodo, toggleTodo, deleteTodo } from '../Redux Toolkit/features/todo/TodoSlice';
import { Button, Input, message } from 'antd';

const App: React.FC = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddTodo = () => {
    if (!text) {
        message.error('Please enter task')
      }
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
      message.success('Store added tasks')
    }
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
    message.success('Deleted todo')
  };

  return (
    <div className='container mx-auto mt-5 text-center'>
    <div className='w-1/3 mx-auto flex flex-col gap-2'>
      <h1>ToDo List</h1>
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
      />
      <Button onClick={handleAddTodo}>Add Todo</Button>
      <ul>
        {todos.map((todo) => (
        <div  className='flex gap-3 items-center justify-center' key={todo.id} >
          <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </li>
            <Button onClick={() => handleToggleTodo(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </Button>
          <Button className='text-red-600' onClick={() => handleDeleteTodo(todo.id)}>Delete</Button>
        </div>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default App;
