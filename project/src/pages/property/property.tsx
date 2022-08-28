import {PropertyType} from '../../types/Offer';
import { getOfferMode } from '../../mocks/offer';
import {useAppDispatch, useAppSelector} from '../../hooks/redux/redux';
import {fetchOfferAction} from '../../store/api-action';
import {useParams} from 'react-router-dom';

import PremiumPanel from './../../components/premium_panel/premium_panel';
import ReviewList from './../../components/review_list/review_list';
import Map from './../../components/map/map';
import OfferList from '../../components/offer_list/offer_list';
import React from 'react';
import AuthorizationButton from '../../components/authorization_button/authorization_button';
import ErrorPage from '../error_404/error_404';

function PropertyPage(offerInfo: PropertyType): JSX.Element {

  const { id } = useParams();
  const dispatcher = useAppDispatch();

  const reviewArray = useAppSelector((state) => state.comments);

  if (id) {
    dispatcher(fetchOfferAction({mode: getOfferMode.NearbyOffers, offerId: Number(id)}));
  }

  const offer = offerInfo.data[0];

  if (!offer || (id && offer.id !== Number(id))) {
    return <ErrorPage />;
  }

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
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                offer.photo.map( (elem) => (
                  <div className="property__image-wrapper" key={ elem }>
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
                <button className={`property__bookmark-button button ${ offer.favorite ? 'property__bookmark-button--active' : '' } `} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${ offer.rating * 20 }%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ offer.rating }</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">{ offer.type }</li>
                <li className="property__feature property__feature--bedrooms">{ offer.bedroomCount } Bedroom</li>
                <li className="property__feature property__feature--adults">Max { offer.maxGuests } adult</li>
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
              <ReviewList ReviewArray={ reviewArray } />
              {
                offerInfo.child
              }
            </div>
            <Map points={[offerInfo.data[0], offerInfo.data[1], offerInfo.data[2] ]} />
          </div>
        </section>
        <div className="container">
          <OfferList data={[offerInfo.data[0], offerInfo.data[1], offerInfo.data[2] ]}/>
        </div>
      </main>
    </div>
  );
}

export default PropertyPage;
