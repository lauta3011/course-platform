import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Home from './screen/Home';
import DetailedItem from './screen/DetailedItem';

import './App.css';

const App: React.FC = () => {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/detail" element={<DetailedItem />}/>
      </Routes>
    </div>
  );
}

export default App;
