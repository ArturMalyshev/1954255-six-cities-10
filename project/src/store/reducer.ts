import {createReducer} from '@reduxjs/toolkit';
import {
  loadOfferArray,
  onChangeActiveOffer,
  onChangeCity,
  onChangeSort,
  redirectToRoute,
  setDataLoadedStatus,
} from './action';
import {
  DEFAULT_CITY,
  SORT_BY_POPULAR,
  SORT_BY_RATE,
  SORT_BY_PRICE_LOW_TO_HIGH,
  SORT_BY_PRICE_HIGH_TO_LOW,
} from '../mocks/offer';
import {OfferType, StateType} from '../types/Offer';
import adaptDataFromServer from '../services/adaptDataFromServer';


const initialState : StateType = {
  city: DEFAULT_CITY,
  offerArray: [],
  sortType: SORT_BY_POPULAR,
  active : undefined,
  isDataLoaded: false,
  authorizationStatus: false
};

let defaultSort: OfferType[] = [];

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(onChangeCity, (state, action) => {
    state.city = action.payload.city;
    state.offerArray = defaultSort.filter((elem) => elem.city.name === action.payload.city);
    state.active = undefined;
  });

  builder.addCase(onChangeSort, (state, action) => {
    state.sortType = action.payload.sortType;
    switch (state.sortType) {
      case SORT_BY_POPULAR:
        state.offerArray = defaultSort.filter((elem) => elem.city.name === state.city);
        break;
      case SORT_BY_RATE:
        state.offerArray.sort((a, b) => b.rating - a.rating);
        break;
      case SORT_BY_PRICE_HIGH_TO_LOW:
        state.offerArray.sort((a, b) => b.price - a.price);
        break;
      case SORT_BY_PRICE_LOW_TO_HIGH:
        state.offerArray.sort((a, b) => a.price - b.price);
        break;
    }
  });

  builder.addCase(onChangeActiveOffer, (state, action)=>{
    state.active = action.payload.activeOffer;
  });

  builder.addCase(loadOfferArray, (state, action) => {
    defaultSort = adaptDataFromServer(action.payload);
    state.offerArray = defaultSort.filter((elem) => elem.city.name === state.city);
  });

  builder.addCase(setDataLoadedStatus, (state, action) => {
    state.isDataLoaded = action.payload;
  });

  builder.addCase(redirectToRoute, (state, action) => {
    window.location.pathname = action.payload;
  });

});

