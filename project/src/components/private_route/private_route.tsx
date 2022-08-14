import { Navigate } from 'react-router-dom';

type PrivateRouteType = {
  children: JSX.Element;
}

export default function PrivateRoute ({children}: PrivateRouteType) {
  const auth = true;
  return auth ? children : (<Navigate to={'/login'} />);
}
