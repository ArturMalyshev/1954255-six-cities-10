import { OfferArrayType } from '../../types/Offer';
import Offer from '../../components/offer/offer';
import FavoriteOffer from '../../components/favorites_offer/favorites_offer';
import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../hooks/redux/redux';
import {onChangeActiveOffer} from '../../store/action';
import {getFavoriteList} from '../../store/api-action';
import {getToken} from '../../services/token';

export default function OfferList(offerArray: OfferArrayType) : JSX.Element {

  const { pathname } = useLocation();
  const dispatcher = useAppDispatch();
  useEffect(()=>{
    if (getToken()) {
      dispatcher(getFavoriteList());
    }
  }, []);
  const favoriteArray = useAppSelector((state) => state.favoriteList);

  if (pathname === '/favorites') {
    const cities: string[] = [];

    favoriteArray.map((elem)=>{
      cities.push(elem.city.name);
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
                  favoriteArray.map((offer)=>{
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
