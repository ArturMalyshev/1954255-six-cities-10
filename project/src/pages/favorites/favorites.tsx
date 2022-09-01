import AuthorizationButton from '../../components/authorization_button/authorization_button';
import {useAppSelector} from '../../hooks/redux/redux';

type favoritePageData = {
  children: JSX.Element;
}

function FavoritePage(children: favoritePageData): JSX.Element {
  const favoritesCount = useAppSelector((state) => state.favoriteList.length);
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="/">
                <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <AuthorizationButton />
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            favoritesCount !== 0 ?
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                { children.children }
              </section>
              :
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future
                    trips.
                  </p>
                </div>
              </section>
          }

        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="../img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritePage;
