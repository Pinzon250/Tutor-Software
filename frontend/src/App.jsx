import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Log_Reg from './pages/user/Log_Reg';
import Home from './pages/Home';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Forgot from './pages/user/Forgot';
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Log_Reg/>} />
        <Route path='/home' element={<ProtectedRoute ><Home /></ProtectedRoute>} />
        <Route path="/login" element={<PublicRoute ><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute ><Register /></PublicRoute>} />
        <Route path="/forgot" element={<Forgot /> }/>
      </Routes>
      <ToastContainer />
    </Router>
  );
}

export default App