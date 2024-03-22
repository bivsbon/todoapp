import './App.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import TodoApp from './components/todo/TodoApp';

function App() {
  return (
    <div className='App'>
      < TodoApp />
      {/* <Counter/> */}
    </div>
  );
}

export default App;
