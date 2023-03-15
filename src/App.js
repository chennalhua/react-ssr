import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OtherPage from './pages/OtherPage'
import Header from './components/Header'

const App = () => (
  <BrowserRouter>
    <Header />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/other' element={<OtherPage />} />
      </Routes>
  </BrowserRouter>
);

export default App