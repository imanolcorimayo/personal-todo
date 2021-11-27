import './App.css';

import Home from './components/Home/Home';

import { Route, Routes } from 'react-router-dom'
import Details from './components/Details/Details';

function App() {
  return (
    <div >
      <Routes>
        <Route path="/personal-todo/" element={ <Home/> }></Route>
        <Route path="/personal-todo/Details/:id" element={ <Details/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
