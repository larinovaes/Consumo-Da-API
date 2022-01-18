import react from "react";

import { Route, Redirect } from "react-router-dom";
//verifica autenticação (SIMPLES)
const isAuth = () => {
  if(localStorage.getItem('token') !== null){
      return true
  }
  return false;
}
//redireciona o usuario caso estaja autenticado
const PrivateRoute = ({component: Component, ...rest}) => {
   return(
       <Route
           {...rest}
           render = { props =>
                isAuth() ? (
                    <Component{...props} />
                ) : (
                    <Redirect
                    to = {{
                        pathname: '/',
                        state: {message: "usuário não autorizado."}
                    }} 
                    />
                )
           }
       />
   );
}

export default PrivateRoute;
