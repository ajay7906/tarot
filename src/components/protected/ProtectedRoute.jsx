// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useAuth } from '../../context/useContext';
// // import { useAuth } from './AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { user } = useAuth();

//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         user ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;


import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../context/useContext';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      element={
        user ? (
          <Component />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default ProtectedRoute;
