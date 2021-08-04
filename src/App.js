import React , { useState } from 'react';
import './App.css';
//importing components
import Form from './components/Form';
import Todo from './components/Todo';

export default function App() {
  const[inputText, setInputText] = useState('')
  return (
    <div className="App">
      <header>
        
        <h1>V's To-Do List</h1>
        </header>
        <Form setInputText={setInputText} />
        <Todo />
      
    </div>
  );
}
