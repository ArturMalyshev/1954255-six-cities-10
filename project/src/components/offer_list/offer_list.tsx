import { OfferArrayType } from '../../types/Offer';
import Offer from '../../components/offer/offer';
import FavoriteOffer from '../../components/favorites_offer/favorites_offer';
import React from 'react';
import { useLocation } from 'react-router-dom';
import {useAppDispatch} from '../../hooks/redux/redux';
import {onChangeActiveOffer} from '../../store/action';

export default function OfferList(offerArray: OfferArrayType) : JSX.Element {

  const { pathname } = useLocation();
  const dispatcher = useAppDispatch();

  if (pathname === '/favorites') {
    const cities: string[] = [];
    offerArray.data.sort((a, b)=>{
      cities.push(a.city.name);
      if (a.city.name > b.city.name) {
        return 1;
      }
      if (a.city.name < b.city.name) {
        return -1;
      }
      return 0;
    });
    const uniqueCities = [...new Set(cities)];
    return (
      <ul className="favorites__list">
        {
          uniqueCities.map((city) => (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{ city }</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  offerArray.data.map((offer)=>{
                    if (city === offer.city.name) {
                      return(
                        <FavoriteOffer offerInfo={offer} key={offer.id} />
                      );
                    }
                  })
                }
              </div>
            </li>
          )
          )
        }
      </ul>
    );
  } else if (pathname === '/') {
    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offerArray.data.map((elem)=> <Offer offerInfo={elem} dispatcher={dispatcher} changeActiveOffer={onChangeActiveOffer} key={elem.id}/>)
        }
      </div>
    );
  } else {
    return (
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            {
              offerArray.data.map((elem)=> <Offer dispatcher={dispatcher} changeActiveOffer={onChangeActiveOffer} offerInfo={elem} key={elem.id}/>)
            }
          </div>
        </section>
      </div>

    );
  }
}
