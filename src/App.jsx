import { useState } from 'react'
import Home from './Pages/Home'
import News from './Pages/News'
import Error from './Pages/Error';
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="news" element={<News/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
