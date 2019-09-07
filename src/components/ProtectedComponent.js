import React from 'react'
import { Redirect, Route} from "react-router-dom";
import {isLoggedIn} from '../services/AuthService'

export default function ProtectedComponent({component : Component, ...rest}){
    return(<Route {...rest} render={(props) => (
        isLoggedIn()
          ? <Component {...props} />
          : <Redirect to='/unauthorized' />
      )} />)
}