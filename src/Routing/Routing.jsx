import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import Welcome from '../welcomePage/Welcome'

const Routing = () => {
  return (
    <div>
        {/* <Switch>
         <Route exact path = '/'>
            <Landing />
        </Route>
        <Route  path = '/register'>
            <Signup />
        </Route>
        <Route  path = '/login'>
            <Login />
        </Route>
        </Switch> */}
         <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />

    </Routes>
      
    </div>
  )
}

export default Routing
