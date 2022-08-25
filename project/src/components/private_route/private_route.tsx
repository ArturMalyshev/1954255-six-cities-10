import { Navigate } from 'react-router-dom';
import {getToken} from '../../services/token';

type PrivateRouteType = {
  children: JSX.Element;
}

export default function PrivateRoute ({children}: PrivateRouteType) {
  if (getToken()) {
    return children;
  }
  return <Navigate to={'/login'} />;
}
