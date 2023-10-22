import './App.css';
import Home from '../CRUD/Home';
import Admin from '../CRUD/Admin';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Appbarr from './Appbarr';
import AddPerson from '../CRUD/AddPerson';
import Login from '../CRUD/Login';
import Edit from '../CRUD/Edit';

import 'paper';


function App() {
  return (
    <div className="App">
      <Router>
        <Appbarr/>
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/afGR53QW9dwr' element={<Admin />} />
              <Route exact path='/addPerson' element={<AddPerson />} />
              <Route exact path='/Login' element={<Login />} />
              <Route exact path='/editperson/:id' element={<Edit/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
