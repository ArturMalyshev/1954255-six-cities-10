import {createAction} from '@reduxjs/toolkit';

export const onChangeCity = createAction<{city: string}>('city/change');

export const onChangeSort = createAction<{sortType: string}>('offer/sort');

export const onChangeActiveOffer = createAction<{activeOffer: number}>('offer/active');
