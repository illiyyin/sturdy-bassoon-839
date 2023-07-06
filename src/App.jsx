import React from 'react'
import Menu from './components/Menu'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

const App = () => {
  return(
    <>
      <BrowserRouter basename="/calories-calculator">
      <Routes>
        <Route path='/' element={<Menu />} />
      </Routes>
      </BrowserRouter>
    </>
  );
};

export default App