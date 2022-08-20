import {createReducer} from '@reduxjs/toolkit';
import getMockOfferData from '../mocks/offer';
import { changeCity } from './action';
import { DEFAULT_CITY } from '../mocks/offer';


const initialState = {
  city: DEFAULT_CITY,
  offerArray: getMockOfferData().filter((elem) => elem.city === DEFAULT_CITY)
};


export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload.city;
    state.offerArray = getMockOfferData().filter((elem) => elem.city === action.payload.city);
  });
});

