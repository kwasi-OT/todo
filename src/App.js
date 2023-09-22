import './App.css';
import moon from './assets/icon-moon.svg';
import Count from './components/Count';
import FilterNav from './components/FilterNav';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="appContainer">
      <div className='headerContainer'>
        <div className='header'>
          <div className='headerContent'>
            <h1>TODO</h1>
            <img src={moon} alt='moon icon'/>
          </div>
          <div className='formContainer'>
            <Form/>
          </div>
        </div>
      </div>
      <div className='todoList'>
        <div>
          <FilterNav/>
        </div>
        <hr/>
        <div>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
          <TodoItem/>
        </div>
        <hr/>
        <div>
          <Count/>
        </div>
      </div>
    </div>
  );
}

export default App;