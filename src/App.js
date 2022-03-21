import Home from './pages/Home';

import { Route, Routes } from 'react-router-dom'
import Details from './pages/Details';
import Add from './pages/Add';
import Accounting from './pages/Accounting';

import './firebase/index'

function App() {
  return (
    <div >
      <Routes>
        <Route path="/personal-todo/" element={ <Home/> }></Route>
        <Route path="/personal-todo/Details/:id" element={ <Details/> }></Route>
        <Route path="/personal-todo/add" element={ <Add/> }></Route>
        <Route path="/personal-todo/accounting" element={ <Accounting/> }></Route>
      </Routes>
    </div>
  );
}

export default App;
