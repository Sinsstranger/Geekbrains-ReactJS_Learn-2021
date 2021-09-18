import {Redirect, Route} from "react-router-dom";

export const PublicRoute = ({authenticated, ...rest}) => !authenticated ? <Route {...rest}/> : <Redirect to="/"/>;