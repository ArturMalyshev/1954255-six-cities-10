import {getToken} from '../../services/token';
import {AppRoute} from '../../mocks/offer';
import {checkloginAction, logoutAction} from '../../store/api-action';
import {useAppDispatch, useAppSelector} from '../../hooks/redux/redux';

export default function AuthorizationButton() :JSX.Element {
  const userConf = useAppSelector((state) => state.authorizationStatus );
  const dispatcher = useAppDispatch();

  if (getToken()) {
    if (!userConf) {
      dispatcher(checkloginAction());
    }
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href={ AppRoute.favorites }>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{ userConf ? userConf.email : 'Loading...' }</span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={ () => { dispatcher(logoutAction()); } }>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </ul>
    );
  }

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <a className="header__nav-link header__nav-link--profile" href={ AppRoute.login }>
          <div className="header__avatar-wrapper user__avatar-wrapper">
          </div>
          <span className="header__login">Sign in</span>
        </a>
      </li>
    </ul>
  );
}
