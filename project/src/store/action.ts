import {createAction} from '@reduxjs/toolkit';
import {OfferFromServer} from '../types/Offer';

export const onChangeCity = createAction<{city: string}>('city/change');

export const onChangeSort = createAction<{sortType: string}>('offer/sort');

export const onChangeActiveOffer = createAction<{activeOffer: number}>('offer/active');

export const loadOfferArray = createAction<OfferFromServer[]>('data/loadOfferArray');

export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
