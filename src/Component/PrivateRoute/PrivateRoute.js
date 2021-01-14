import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

  const {auth} = useContext(UserContext)
  const [loggedInUser,setLoggedInUser ] = auth

    return (
        <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email  ||loggedInUser.name ?(
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;