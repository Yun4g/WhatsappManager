
import './App.css'
import { Routes, Route } from "react-router-dom";
import Auth from './pages/auth/auth';
import Dashboard from './pages/Dashboard/dashboard.tsx';



function App() {


  return (
     <Routes>
        <Route path={'/'} element={<Auth/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/testRoute' element={<Dashboard/>}/>
     </Routes>
  )
}

export default App
