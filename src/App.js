import './App.css';

import Home from './components/Home/Home';

import { Route, Routes } from 'react-router-dom'
import Details from './components/Details/Details';
import Add from './components/Add/Add';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/personal-todo/" element={ <Home/> }></Route>
        <Route path="/personal-todo/Details/:id" element={ <Details/> }></Route>
        <Route path="/personal-todo/add" element={ <Add/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
