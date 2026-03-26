
import './App.css'
import { Routes, Route } from "react-router-dom";
import Auth from './pages/auth/auth';
import Dashboard from './pages/Dashboard/dashboard.tsx';
import Layout from './pages/Dashboard/layout.tsx';
import { Toaster } from "react-hot-toast";
import Groups from './pages/Dashboard/groups.tsx';



function App() {


  return (
   <>
      <Toaster position="top-right" />

       <Routes>
        <Route path={'/'} element={<Auth/>}/>


        <Route element={<Layout/>}>
         <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/Groups' element={<Groups/>}/>
        </Route>
       
      
     </Routes>
   </>
    
  )
}

export default App
