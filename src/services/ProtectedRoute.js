import React from "react";
import { Redirect, Route } from "react-router-dom";

// function ProtectedRoute({ component: Component, ...restOfProps }) {
//   const isAuthenticated = sessionStorage.getItem("authData");

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>{
//         return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
//       }
//       }
//     />
//   );
// }

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  const isAuthenticated = sessionStorage.getItem("token");
  try{
    return (
      <Route
        {...rest}
        render={props => {
          if (isAuthenticated != null) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        }}
      />
    )
  }catch(error){
    console.log(error)
  }
};


export default ProtectedRoute;