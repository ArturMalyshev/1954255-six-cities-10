import { PropertyType } from '../../types/Offer';
import { useParams } from 'react-router-dom';
import { data } from '../../mocks/offer';
import { closestOffers } from '../../mocks/offer';

import PremiumPanel from './../../components/premium_panel/premium_panel';
import ReviewList from './../../components/review_list/review_list';
import Map from './../../components/map/map';
import OfferList from './../../components/offer_list/offer_list';

function PropertyPage(offerInfo: PropertyType): JSX.Element {
  const { id } = useParams();
  if (id !== undefined) {
    const offerId = +id - 1;
    const offer = offerInfo.data[offerId];

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
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper"/>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {
                  offer.photo.map( (elem) => (
                    <div className="property__image-wrapper" key={ offer.id }>
                      <img className="property__image" src={ elem } alt="Photo studio" />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                <PremiumPanel premium={offer.premium} />
                <div className="property__name-wrapper">
                  <h1 className="property__name">{ offer.title }</h1>
                  <button className="property__bookmark-button button" type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: '80%'}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{ offer.rating }</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">{ offer.type }</li>
                  <li className="property__feature property__feature--bedrooms">{ offer.bedroomCount }</li>
                  <li className="property__feature property__feature--adults">{ offer.maxGuests }</li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{ offer.price }</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {
                      offer.options.map( (option) => (<li className="property__inside-item" key={option}>{ option }</li>) )
                    }
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={ offer.ownerInfo.avatar } width="74" height="74" alt="Host avatar" />
                    </div>
                    <span className="property__user-name">{ offer.ownerInfo.name }</span>
                    <span className="property__user-status">{ offer.ownerInfo.pro ? 'Pro' : false }</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      { offer.description }
                    </p>
                  </div>
                </div>
                <ReviewList ReviewArray={ data } />
              </div>
              <Map points={[offerInfo.data[0], offerInfo.data[1], offerInfo.data[2] ]} />
            </div>
          </section>
          <div className="container">
            <OfferList data={closestOffers}/>
          </div>
        </main>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default PropertyPage;
