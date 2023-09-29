import React, {useState} from 'react';
import './App.css';
import moon from './assets/icon-moon.svg';
import Count from './components/Count';
import FilterNav from './components/FilterNav';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  const[todoList, setTodoList] = useState([]);
  const[filterList, setFilterList] = useState('all');

  // function to add new todo
    const addTodo = (userInput) => {
      const newTodo = {
        id: Date.now(),
        text: userInput,
        status: false,
      }

      setTodoList(prevData => [newTodo, ...prevData])
    }

  // function to remove todo item from list
  const removeTodoItem = (id) => {
    const todoItems = todoList.filter(todo => todo.id !== id);
    setTodoList(todoItems);
  }

  // function to toggle item completion
  const toggleItem = (id) => {
    setTodoList(
      todoList.map(todo => {
        if(todo.id === id) {
          return {...todo, status: !todo.status};
        }
        return todo;
      })
    )
  }

  // function to clear completed tasks
  const clearCompleted = () => {
    const todoItems = todoList.filter(todo => !todo.status);
    setTodoList(todoItems);
  }

  // function to filter tasks
  const filterTodo = () => {

  }

  return (
    <div className="appContainer">
      <div className='headerContainer'>
        <div className='header'>
          <div className='headerContent'>
            <h1>TODO</h1>
            <img src={moon} alt='moon icon'/>
          </div>
          <div className='formContainer'>
            <Form addHandler={addTodo}/>
          </div>
        </div>
      </div>
      <div className='todoList'>
        <div>
          <FilterNav/>
        </div>
        <hr/>
        <div>
          {todoList.map(item => <TodoItem setTodoStatus={toggleItem} deleteItem={removeTodoItem} todoData={item} key={item.id}/>)}
        </div>
        <hr/>
        <div>
          <Count clearItem={clearCompleted}/>
        </div>
      </div>
    </div>
  );
}

export default App;