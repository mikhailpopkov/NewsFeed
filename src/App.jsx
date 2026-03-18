import Home from './Pages/Home'
import News from './Pages/News'
import Error from './Pages/Error';
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import NewsDetail from './Pages/NewsDetail';
import Users from './Pages/Users';
import { useAuth } from './hooks/useAuth';

function App() {
  
  useAuth();

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="news" element={<News/>}/>
          <Route path='news/:id' element={<NewsDetail/>} />
          <Route path="users" element={<Users/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
