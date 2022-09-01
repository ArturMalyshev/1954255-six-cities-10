import { OfferType } from '../../types/Offer';
import PremiumPanel from './../premium_panel/premium_panel';
import {addToFavorites} from '../../store/api-action';
import {useAppDispatch} from '../../hooks/redux/redux';

type OfferInfoType = {
  offerInfo: OfferType;
}

export default function FavoritesOffer (offerInfo: OfferInfoType) {

  const dispatcher = useAppDispatch();

  function addToFavorite(evt: any) {
    const button = evt.nativeEvent.path[2];
    button.classList.remove('place-card__bookmark-button--active');
    dispatcher(addToFavorites({offerId: offerInfo.offerInfo.id, mode: 0}));
  }

  const rating = 20 * offerInfo.offerInfo.rating;
  return (
    <article className="favorites__card place-card">
      <PremiumPanel premium={ offerInfo.offerInfo.premium } />
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href={`/offer/${ offerInfo.offerInfo.id }`}>
          <img className="place-card__image" src={ offerInfo.offerInfo.photo[0] } width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{ offerInfo.offerInfo.price }</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button" onClick={ addToFavorite }>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ rating }%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={`/offer/${ offerInfo.offerInfo.id }`}>{ offerInfo.offerInfo.title }</a>
        </h2>
        <p className="place-card__type">{ offerInfo.offerInfo.type }</p>
      </div>
    </article>
  );
}
