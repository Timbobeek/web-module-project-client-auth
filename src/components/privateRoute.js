import React from "react";
import { Route, Redirect } from "react-router-dom";

// const PrivateRoute = (routeProps) => {
//   const{component:Component, ...rest} = routeProps;

//   return <Route {...rest} render = {props=>{
//     if(localStorage.getItem('token')){
//       return <Component {...props}/>
//     } else {
//       return <Redirect to='/login'/>
//     }
//   }}/>
// }

class PrivateRoute extends React.Component {
  // const{component:Component, ...rest} = routeProps;

  render() {
    const { component: Component, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (localStorage.getItem("token")) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    );
  }
}

export default PrivateRoute;
