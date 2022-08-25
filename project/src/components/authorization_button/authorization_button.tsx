import {getToken} from '../../services/token';
import {AppRoute} from '../../mocks/offer';
import {store} from '../../store';
import {logoutAction} from '../../store/api-action';

export default function AuthorizationButton() :JSX.Element {
  if (getToken()) {
    return (
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">Qweertyu@mail.ru</span>
            <span className="header__favorite-count">3</span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" onClick={ () => { store.dispatch(logoutAction()); } }>
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
