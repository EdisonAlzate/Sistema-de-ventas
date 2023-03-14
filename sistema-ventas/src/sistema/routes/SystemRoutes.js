import { Navigate, Route, Routes } from "react-router-dom"
// import { SystemPage } from "../pages/systemPage"
import { SystemPage } from "../pages/SystemPage"


export const SystemRoutes = () => {
  return (
    <Routes>
            <Route path="/" element={<SystemPage/>}/>           
            
            <Route path="/*" element={<Navigate to="/"/>}/>
           
        </Routes>
  )
}
