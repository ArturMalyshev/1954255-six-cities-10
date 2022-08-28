import {createAction} from '@reduxjs/toolkit';
import {CommentType, OfferFromServer, userConfiguration} from '../types/Offer';
import {AppRoute} from '../mocks/offer';

export const onChangeCity = createAction<{city: string}>('city/change');

export const onChangeSort = createAction<{sortType: string}>('offer/sort');

export const onChangeActiveOffer = createAction<{activeOffer: number}>('offer/active');

export const loadOfferArray = createAction<OfferFromServer[]>('data/loadOfferArray');

export const loadOneOffer = createAction<OfferFromServer>('data/loadOneOffer');

export const addOffers = createAction<OfferFromServer[]>('data/addOffer');

export const getComments = createAction<CommentType[]>('data/addComment');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export const setAuthorizationStatus = createAction<false | userConfiguration>('authorization/status');

export const redirectToRoute = createAction<AppRoute>('app/redirectToRoute');
