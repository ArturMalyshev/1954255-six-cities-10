import {createReducer} from '@reduxjs/toolkit';
import getMockOfferData from '../mocks/offer';
import {onChangeActiveOffer, onChangeCity, onChangeSort} from './action';
import { DEFAULT_CITY, SORT_BY_POPULAR, SORT_BY_RATE, SORT_BY_PRICE_LOW_TO_HIGH, SORT_BY_PRICE_HIGH_TO_LOW } from '../mocks/offer';
import {StateType} from '../types/Offer';


const initialState : StateType = {
  city: DEFAULT_CITY,
  offerArray: getMockOfferData().filter((elem) => elem.city === DEFAULT_CITY),
  sortType: SORT_BY_POPULAR,
  active : undefined
};


export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(onChangeCity, (state, action) => {
    state.city = action.payload.city;
    state.offerArray = getMockOfferData().filter((elem) => elem.city === action.payload.city);
    state.active = undefined;
  });

  builder.addCase(onChangeSort, (state, action) => {
    state.sortType = action.payload.sortType;
    switch (state.sortType) {
      case SORT_BY_POPULAR:
        state.offerArray = getMockOfferData().filter((elem) => elem.city === state.city);
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

});

