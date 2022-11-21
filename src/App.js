import './App.scss';
import { useContext } from 'react';
import {
  Routes,
  Route,
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import InfoPage from './pages/infoPage/infoPage';
import Login from 'pages/login/login';
import Home, { homeloader } from 'pages/home/home';
import NotFound from 'pages/page404/page404';
import { AuthContext } from 'context/AuthContext';
import QRscanner from 'pages/qrScanner/qrScanner';
function App() {
  const { currentUser } = useContext(AuthContext);
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  return (
    <div className='App'>
      {/* <RouterProvider router={router} /> */}
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
        <Route path='qrscanner' element={<RequireAuth><QRscanner/></RequireAuth>}/>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
