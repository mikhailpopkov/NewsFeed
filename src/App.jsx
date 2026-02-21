import { useState } from 'react'
import Home from './Pages/Home'
import News from './Pages/News'
import Error from './Pages/Error';
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import NewsDetail from './Pages/NewsDetail';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="news" element={<News/>}/>
          <Route path='news/:id' element={<NewsDetail/>} />
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
