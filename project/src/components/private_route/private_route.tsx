import { Navigate } from 'react-router-dom';

type PrivateRouteType = {
  children: JSX.Element;
}

export default function PrivateRoute ({children}: PrivateRouteType) {
  const auth = true;

  if (auth) {
    return children;
  } else {
    return (<Navigate to={'/login'} />);
  }
}
