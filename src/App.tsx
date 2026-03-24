import Home from "./pages/Home";
import News from "./pages/News";
import Error from "./pages/Error";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import NewsDetail from "./pages/NewsDetail.tsx";
import Users from "./pages/Users";
import UsersDetail from "./pages/UsersDetail";
import { useAuth } from "./hooks/useAuth.ts";

const App: React.FC = () => {
  useAuth();

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="news/:id" element={<NewsDetail />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UsersDetail />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
