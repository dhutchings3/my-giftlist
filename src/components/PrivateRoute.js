import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';
// import App from './App/App';

function PrivateRoute({ render:Render, ...props }) {
  // const Component = component
  // console.log(component)
  return (
    <Route
      {...props}
      render={componentProps => (
        TokenService.hasAuthToken()
          ? Render(componentProps)
          : <Redirect
              to={{
                pathname: '/login',
                state: { from: componentProps.location }
              }}
            />
      )}
    />
  )
}

export default PrivateRoute;