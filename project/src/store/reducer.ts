import {createReducer} from '@reduxjs/toolkit';
import {
  addOffers, getComments,
  loadOfferArray,
  loadOneOffer,
  onChangeActiveOffer,
  onChangeCity,
  onChangeSort,
  redirectToRoute,
  setAuthorizationStatus,
  setDataLoadedStatus,
  updateCommentForm,
} from './action';
import {
  DEFAULT_CITY,
  SORT_BY_POPULAR,
  SORT_BY_RATE,
  SORT_BY_PRICE_LOW_TO_HIGH,
  SORT_BY_PRICE_HIGH_TO_LOW,
  CommentFormState,
} from '../mocks/offer';
import {OfferType, StateType} from '../types/Offer';
import adaptDataFromServer from '../services/adaptDataFromServer';


const initialState : StateType = {
  city: DEFAULT_CITY,
  offerArray: [],
  sortType: SORT_BY_POPULAR,
  active : undefined,
  isDataLoaded: false,
  authorizationStatus: false,
  commentButton: CommentFormState.Ready,
};

let defaultSort: OfferType[] = [];
const selectedOffer: OfferType[] = [];

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

  builder.addCase(loadOneOffer, (state, action) => {
    const adaptedValue = adaptDataFromServer([action.payload]);
    selectedOffer.push(adaptedValue[0]);
    state.offerArray = selectedOffer;
  });


  builder.addCase(setDataLoadedStatus, (state, action) => {
    state.isDataLoaded = action.payload;
  });

  builder.addCase(setAuthorizationStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(redirectToRoute, (state, action) => {
    window.location.pathname = action.payload;
  });

  builder.addCase(addOffers, (state, action) => {
    const parsedOffers = adaptDataFromServer(action.payload);
    parsedOffers.map((offer) => {
      selectedOffer.push(offer);
    });
    state.offerArray = selectedOffer;
  });

  builder.addCase(getComments, (state, action) => {
    state.comments = action.payload;
  });

  builder.addCase(updateCommentForm, (state, action) => {
    state.commentButton = action.payload;
  });
});

