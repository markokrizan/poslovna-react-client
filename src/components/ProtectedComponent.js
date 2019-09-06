import React from 'react'
import { Redirect, Route} from "react-router-dom";

export default function ProtectedComponent({component : Component, ...rest}){
    return(<Route {...rest} render={(props) => (
        localStorage.getItem('token')
          ? <Component {...props} />
          : <Redirect to='/unauthorized' />
      )} />)
}