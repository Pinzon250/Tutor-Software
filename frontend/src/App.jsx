import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Log_Reg from './pages/user/Log_Reg';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Forgot from './pages/user/Forgot';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Log_Reg/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot /> }/>
      </Routes>
    </Router>
  );
}

export default App