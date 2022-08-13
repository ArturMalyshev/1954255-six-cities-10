import { OfferType } from '../../types/Offer';
import PremiumPanel from '../premium_panel/premium_panel';

type OfferInfoType = {
  offerInfo: OfferType;
  event: CallableFunction;
}

export default function Offer(offerInfo: OfferInfoType): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseEnter={ () => offerInfo.event(offerInfo.offerInfo.id) }>
      {
        PremiumPanel(offerInfo.offerInfo.premium)
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
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
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: '100%'}}></span>
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
