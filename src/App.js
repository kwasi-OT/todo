import React, {useState} from 'react';
import './App.css';
import moon from './assets/icon-moon.svg';
import sun from './assets/icon-sun.svg';
import Count from './components/Count';
import FilterNav from './components/FilterNav';
import Form from './components/Form';
import TodoItem from './components/TodoItem';
import { GetThemeValues } from './components/ContextTheme';

function App() {
  const {darkTheme, themeHandler} = GetThemeValues();

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
  const filterTodo = (value) => setFilterList(value);

  // function to loop through filtered tasks
  const filterTodoList = () => {
    let filteredItems = todoList;

    if (filterList === "all") {
      filteredItems = todoList;
    } else if (filterList === "active") {
      filteredItems = todoList.filter(todo => !todo.status);
    } else if (filterList === "completed") {
      filteredItems = todoList.filter(todo => todo.status);
    }

    return filteredItems.map(item => 
      <TodoItem setTodoStatus={toggleItem} 
      deleteItem={removeTodoItem} 
      todoData={item} key={item.id}/>
    );
  }

  // function to count the number of items based on the filter conditions
  const countItems = () => {
    let count = 0;
    if (filterList === "all") {
      count = todoList.length;
    } else if (filterList === "active") {
      count = todoList.filter(todoItem => !todoItem.status).length;
    } else if (filterList === "completed") {
      count = todoList.filter(todoItem => todoItem.status).length;
    }

    return count;
  }

  return (
    <div className={`appContainer ${darkTheme ? "dark" : ""}`}>
      <div className={`headerContainer ${darkTheme ? 'dark' : ''}`}>
        <div className='header'>
          <div className='headerContent'>
            <h1>TODO</h1>
            <img src={darkTheme ? sun : moon} onClick={themeHandler} alt='moon icon'/>
          </div>
          <div className={`formContainer ${darkTheme ? "dark" : ""}`}>
            <Form addHandler={addTodo} addTheme={darkTheme}/>
          </div>
        </div>
      </div>
      <div className={`todoList ${darkTheme ? "dark" : ""}`}>
        <div>
          <FilterNav addFilter={filterTodo}/>
        </div>
        <hr/>
        <div>
          {filterTodoList()}
        </div>
        <hr/>
        <div>
          <Count count={countItems()} clearItem={clearCompleted}/>
        </div>
      </div>
    </div>
  );
}

export default App;