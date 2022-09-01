import {City} from '../types/Map';

export const citiesList: City[] = [
  {
    name:'Paris',
    latitude: 52.3809553933508,
    longitude: 4.939309666406198,
    zoom: 10,
  },
  {
    name:'Cologne',
    latitude: 52.3809552943508,
    longitude: 4.939309666406198,
    zoom: 10,
  },
  {
    name:'Brussels',
    latitude: 52.3809553944844,
    longitude: 4.939309666406198,
    zoom: 10,
  },
  {
    name:'Amsterdam',
    latitude: 52.3809551243508,
    longitude: 4.939309666406198,
    zoom: 10,
  },
  {
    name:'Hamburg',
    latitude: 51.3609553933508,
    longitude: 5.919309666406198,
    zoom: 10,
  },
  {
    name:'Dusseldorf',
    latitude: 52.3809543943508,
    longitude: 4.939309666406198,
    zoom: 10,
  },
];

export const DEFAULT_CITY = 'Paris';

export const SORT_BY_POPULAR = 'Popular';
export const SORT_BY_PRICE_LOW_TO_HIGH = 'Low to high';
export const SORT_BY_PRICE_HIGH_TO_LOW = 'High to low';
export const SORT_BY_RATE = 'Top rated first';

export enum APIRoute {
  OfferArray = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Offer = '/hotels/',
  Comments = '/comments/',
  Favorite = '/favorite',
}

export enum getOfferMode {
  OfferArray = 0,
  OneOffer = 1,
  NearbyOffers = 2,
}

export enum AppRoute {
  Login = '/login',
  Main = '/',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum CommentFormState {
  Loading = 'LOADING',
  Ready = 'READY',
  Error = 'ERROR',
}
