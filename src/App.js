import "./App.scss"
import { Routes, Route } from "react-router-dom"
import InfoPage from "./pages/infoPage/infoPage"
import Login from "pages/login/login"
import Home from "pages/home/home"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<InfoPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </header>
    </div>
  )
}

export default App
