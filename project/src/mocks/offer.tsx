import {City} from '../types/Map';
import {ReviewType} from '../types/Offer';

export const data: ReviewType[] = [
  {
    name: 'fdsfaffasf',
    avatar: 'dfasfasfafadsfdsf',
    text: 'sdfasfa sf fsdf asfsafas fsafsaf asfa sfsa fas fdsf ',
    stars: 1,
    date: 'April 2022'
  },
  {
    name: 'rrrrrrrrrrrrrrr',
    avatar: 'dfasfasfafadsfdsf',
    text: 'sdfasfa sf fsdf asfsafas fsafsaf asfa sfsa fas fdsf ',
    stars: 3,
    date: 'April 2021'
  },
  {
    name: '11111112312312',
    avatar: 'dfasfasfafadsfdsf',
    text: 'sdfasfa sf fsdf asfsafas fsafsaf asfa sfsa fas fdsf ',
    stars: 5,
    date: 'April 2020'
  },
  {
    name: 'rgsdfgdsgfggsgf gsd ',
    avatar: 'dfasfasfafadsfdsf',
    text: 'sdfasfa sf fsdf asfsafas fsafsaf asfa sfsa fas fdsf ',
    stars: 2,
    date: 'April 2019'
  },
];

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
  Offer = '/hotels/:id',
}
