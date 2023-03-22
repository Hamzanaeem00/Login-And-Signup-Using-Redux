import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../Landing/Landing'
import Login from '../Login/Login'
import Signup from '../Signup/Signup'

const Routing = () => {
  return (
    <div>
        <Switch>
         <Route exact path = '/'>
            <Landing />
        </Route>
        <Route  path = '/register'>
            <Signup />
        </Route>
        <Route  path = '/login'>
            <Login />
        </Route>
        </Switch>
      
    </div>
  )
}

export default Routing
