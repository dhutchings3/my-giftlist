import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../services/token-service';

function PrivateRoute({ render:Render, ...props }) {

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