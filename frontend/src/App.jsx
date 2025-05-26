import { Routes, Route } from 'react-router-dom'
import './App.css'
import Log_Reg from './pages/user/Log_Reg';
import Home from './pages/Home';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import Forgot from './pages/user/Forgot';
import ProtectedRoute from './components/auth/ProtectedRoute';
import PublicRoute from './components/auth/PublicRoute';
import Content from './pages/Modulos/Content';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layouts/layout';
import InformacionContenido from './pages/Modulos/Content/InformacionContenido';
import Test from './pages/Modulos/Test';
import TestModeloOsi from './pages/Modulos/TestForm/TestModeloOsi';
import Activities from './pages/Modulos/Activities';
import ActividadModeloOSI from './pages/Modulos/Activities/ActivitiesModeloOsi';
import AdminLayout from './admin/components/layouts/AdminLayout';
import AdminHome from './admin/AdminHome';
import Students from './admin/components/modules/Students';
import Dashboard from './admin/components/modules/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Log_Reg />} />
        <Route path='/home' element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/content' element={<ProtectedRoute><Layout><Content /></Layout></ProtectedRoute>} />
        <Route path='/content/:tema' element={<ProtectedRoute><Layout><InformacionContenido /></Layout></ProtectedRoute>} />
        <Route path="/test" element={<ProtectedRoute><Layout><Test /></Layout></ProtectedRoute>} />
        <Route path="/test/:id" element={<ProtectedRoute><Layout><TestModeloOsi /></Layout></ProtectedRoute>} />
        <Route path="/activities" element={<ProtectedRoute><Layout><Activities /></Layout></ProtectedRoute>} />
        <Route path="/activities/:id" element={<ProtectedRoute><Layout><ActividadModeloOSI /></Layout></ProtectedRoute>} />
        <Route path='/forgot' element={<Forgot />} />

        <Route path="/admin" element={
          <ProtectedRoute role="profesor">
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminHome />} /> {/* Este es el Dashboard principal */}
          <Route path="students" element={<Students />} />
          {/* <Route path="evaluations" element={<Evaluations />} />
          <Route path="content" element={<ContentManagement />} />
          <Route path="learning-paths" element={<LearningPaths />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
