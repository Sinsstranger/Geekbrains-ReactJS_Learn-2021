import {Redirect, Route} from "react-router-dom";

export const PrivateRoute = ({authenticated, ...rest}) => authenticated ? <Route {...rest}/> : <Redirect to="/signin/"/>;