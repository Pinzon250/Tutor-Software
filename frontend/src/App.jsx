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
import AreaCobertura from './pages/Modulos/Content/AreaCobertura';
import DireccionamientoIp from './pages/Modulos/Content/DireccionamientoIP';
import ModeloOsi from './pages/Modulos/Content/ModeloOsi';
import TiposDeModulacion from './pages/Modulos/Content/TiposDeModulacion';
import TopologíasRed from './pages/Modulos/Content/TopologiasRed';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Layout from './layouts/Layout';
import Test from './pages/Modulos/Test';
import TestFormularios from './pages/Modulos/TestForm/TestFormularios';
import Activities from './pages/Modulos/Activities';
import ActividadModeloOSI from './pages/Modulos/Activities/ActivitiesModeloOsi';
import ActividadDireccionamientoIP from './pages/Modulos/Activities/ActividadDireccionamientoIP';
import ActividadTiposDeModulacion from './pages/Modulos/Activities/ActividadTiposDeModulacion';
import AdminLayout from './admin/components/layouts/AdminLayout';
import AdminHome from './admin/AdminHome';
import Students from './admin/components/modules/Students';
import ActividadAreasCobertura from './pages/Modulos/Activities/ActividadAreasCobertura';
import ActividadTopologiasRed from './pages/Modulos/Activities/ActividadTopologiasRed';
import ActivitiesAdmin from './admin/components/modules/ActivitiesAdmin';
import ContentManagement from './admin/components/modules/ContentManagement';
import Evaluations from './admin/components/modules/Evaluations';
import LearningPaths from './admin/components/modules/LearningPaths';




function App() {
  return (
    <>
      <Routes>

        {/* PRINCIPAL */}
        <Route path='/' element={<Log_Reg />} />
        <Route path='/home' element={<ProtectedRoute><Layout><Home /></Layout></ProtectedRoute>} />
        <Route path='/login' element={<PublicRoute><Login /></PublicRoute>} />
        <Route path='/register' element={<PublicRoute><Register /></PublicRoute>} />
        <Route path='/forgot' element={<PublicRoute><Forgot /></PublicRoute>} />

        {/* CONTENIDOS */}
        <Route path='/content' element={<ProtectedRoute><Layout><Content /></Layout></ProtectedRoute>} />
        <Route path='/modeloosi' element={<ProtectedRoute><Layout><ModeloOsi /></Layout></ProtectedRoute>} />
        <Route path='/direccionamiento-ip' element={<ProtectedRoute><Layout><DireccionamientoIp /></Layout></ProtectedRoute>} />
        <Route path='/tipos-de-modulacion' element={<ProtectedRoute><Layout><TiposDeModulacion /></Layout></ProtectedRoute>} />
        <Route path='/topologiasred' element={<ProtectedRoute><Layout><TopologíasRed /></Layout></ProtectedRoute>} />
        <Route path='/areacobertura' element={<ProtectedRoute><Layout><AreaCobertura /></Layout></ProtectedRoute>} />


        {/* EVALUACIONES */}
        <Route path="/test" element={<ProtectedRoute><Layout><Test /></Layout></ProtectedRoute>} />
        <Route path="/test/:id" element={<ProtectedRoute><Layout><TestFormularios /></Layout></ProtectedRoute>} />


        {/* ACTIVIDADES */}
        <Route path="/activities" element={<ProtectedRoute><Layout><Activities /></Layout></ProtectedRoute>} />
        <Route path="/actividadmodeloosi" element={<ProtectedRoute><Layout><ActividadModeloOSI/></Layout></ProtectedRoute>} />
        <Route path="/actividadareascobertura" element={<ProtectedRoute><Layout><ActividadAreasCobertura /></Layout></ProtectedRoute>} />
        <Route path="/actividadtopologiasred" element={<ProtectedRoute><Layout><ActividadTopologiasRed /></Layout></ProtectedRoute>} />
        <Route path='/actividad-direccionamiento-ip' element={<ProtectedRoute><Layout><ActividadDireccionamientoIP /></Layout></ProtectedRoute>} />
        <Route path='/actividad-tipos-de-modulacion' element={<ProtectedRoute><Layout><ActividadTiposDeModulacion /></Layout></ProtectedRoute>} />

        

        <Route path="/admin" element={
          <ProtectedRoute role="profesor">
            <AdminLayout />
          </ProtectedRoute>
        }>
          <Route index element={<AdminHome />} /> {/* Este es el Dashboard principal */}
          <Route path="students" element={<Students />} />
          <Route path="evaluations" element={<Evaluations />} />
          <Route path="content" element={<ContentManagement />} />
          <Route path="learning-paths" element={<LearningPaths />} />
          <Route path="activities" element={<ActivitiesAdmin />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
