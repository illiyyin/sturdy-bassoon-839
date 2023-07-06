import React from 'react'
import Menu from './components/Menu'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

const App = () => {
  return(
    <>
      <BrowserRouter basename="/sturdy-bassoon-839">
      <Routes>
        <Route path='/' element={<Menu />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App