import {OfferType} from '../../types/Offer';
import {useLocation} from 'react-router-dom';
import PremiumPanel from '../premium_panel/premium_panel';
import {useAppDispatch} from '../../hooks/redux/redux';
import {addToFavorites} from '../../store/api-action';
import {getToken} from '../../services/token';
import {redirectToRoute} from '../../store/action';
import {AppRoute} from '../../mocks/offer';

type OfferInfoType = {
  offerInfo: OfferType;
  dispatcher: CallableFunction;
  changeActiveOffer: CallableFunction;
}

export default function Offer(offerInfo: OfferInfoType): JSX.Element {
  const dispatcher = useAppDispatch();
  const { pathname } = useLocation();

  function addToFavorite(evt: any) {
    if (getToken()) {
      const button = evt.nativeEvent.path[2];
      if (button.classList.contains('place-card__bookmark-button--active')) {
        button.classList.remove('place-card__bookmark-button--active');
        dispatcher(addToFavorites({offerId: offerInfo.offerInfo.id, mode: 0}));
      } else {
        button.classList.add('place-card__bookmark-button--active');
        dispatcher(addToFavorites({offerId: offerInfo.offerInfo.id, mode: 1}));
      }
    } else {
      dispatcher(redirectToRoute(AppRoute.Login));
    }
  }

  return (
    <article
      className={`place-card ${pathname === '/' ? 'cities__card' : 'near-places__card'}`}
      onMouseEnter={ () => offerInfo.dispatcher(offerInfo.changeActiveOffer({activeOffer: offerInfo.offerInfo.id}))}
    >
      <PremiumPanel premium={ offerInfo.offerInfo.premium } />
      <div className={`place-card__image-wrapper ${pathname === '/' ? 'cities__image-wrapper' : 'near-places__image-wrapper'}`}>
        <a href={ `/offer/${offerInfo.offerInfo.id}` }>
          <img className="place-card__image" src={offerInfo.offerInfo.photo[0]} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offerInfo.offerInfo.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${ offerInfo.offerInfo.favorite ? 'place-card__bookmark-button--active' : '' }`}
            type="button"
            onClick={ addToFavorite }
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ 20 * offerInfo.offerInfo.rating }%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={ `/offer/${offerInfo.offerInfo.id}` }>{offerInfo.offerInfo.description}</a>
        </h2>
        <p className="place-card__type">{offerInfo.offerInfo.type}</p>
      </div>
    </article>);
}
