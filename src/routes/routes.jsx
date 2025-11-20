import React from 'react'
import { BrowserRouter, Route , Routes} from 'react-router'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Logout from '../pages/Logout/Logout'
import Models from '../pages/models/Models'
import EditPage from '../pages/editPage/editPage'



const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/login" element={<Login /> }/>
            <Route path="/logout" element={<Logout /> }/>
            <Route path="/models" element={<Models /> }/>
            <Route path="/edit" element={<EditPage /> }/>
            {/* <Route path="/detail/:id" element={<PackDetail /> }/>
            <Route path="/request-this-trip/:id/:index" element={<RequestTrip /> }/>
            <Route path="/book" element={<PackageAll /> }/> */}
            {/*
            
            <Route path="/request" element={<RequestTrip /> }/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
