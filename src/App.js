import './App.scss';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import InfoPage from './pages/infoPage/infoPage';
import Login from 'pages/login/login';
import Home from 'pages/home/home';
import NotFound from 'pages/page404/page404';
import { AuthContext } from 'context/AuthContext';
function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<InfoPage />} />
        <Route path='login' element={<Login />} />
        <Route
          index
          path='home'
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
