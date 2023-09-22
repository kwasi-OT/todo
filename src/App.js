import './App.css';
import moon from './assets/icon-moon.svg';
import FilterNav from './components/FilterNav';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="appContainer">
      <div className='header'>
        <div className='headerContent'>
          <h1>TODO</h1>
          <img src={moon} alt='moon icon'/>
        </div>
        <div className='formContainer'>
          <Form/>
        </div>
      </div>
      <div className='itemsContainer'>
        <FilterNav/>
        <TodoItem/>
      </div>
    </div>
  );
}

export default App;