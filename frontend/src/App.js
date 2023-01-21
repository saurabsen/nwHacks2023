import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Menu } from './view/Menu';
import { Capture } from './view/Capture';
import { Translate } from './view/Translate';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Menu />}></Route>
        <Route path='/capture' element={<Capture />}></Route>
        <Route path='/translate' element={<Translate />}></Route>
      </Routes>
    </div>

  );
}

export default App;
