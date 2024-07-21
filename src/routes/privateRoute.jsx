// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import { useAuth } from '../state/authContext';

// function PrivateRoute({ component: Component, ...rest }) {
//   const { user } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to="/login" />
//         )
//       }
//     />
//   );
// }

// export default PrivateRoute;

import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../state/authContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? <Element {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
