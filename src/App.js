import logo from './logo.svg';
import './App.scss';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/login/login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route></Route>
          <Route></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
