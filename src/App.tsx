
import './App.css'
import { Routes, Route } from "react-router-dom";
import Auth from './pages/auth/auth';
import Dashboard from './pages/Dashboard/dashboard.tsx';
import Layout from './pages/Dashboard/layout.tsx';
import { Toaster } from "react-hot-toast";
import Groups from './pages/Dashboard/groups.tsx';
import GroupDetails from './pages/Dashboard/groupDetail.tsx';



function App() {


  return (
   <>
      <Toaster position="top-right" />

       <Routes>
        <Route path={'/'} element={<Auth/>}/>


        <Route element={<Layout/>}>
         <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/Groups' element={<Groups/>}/>
           <Route path='/Groups/:id' element={<GroupDetails/>}/>
        </Route>
       
      
     </Routes>
   </>
    
  )
}

export default App
