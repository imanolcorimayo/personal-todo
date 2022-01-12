import './App.css';

import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom'
import Details from './components/Details';
import Add from './pages/Add';

import './firebase'

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
