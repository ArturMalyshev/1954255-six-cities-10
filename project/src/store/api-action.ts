import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOfferArray, setDataLoadedStatus} from './action';
import {APIRoute} from '../mocks/offer';
import {AppDispatch, State} from '../types/Store';
import {OfferFromServer} from '../types/Offer';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<OfferFromServer[]>(APIRoute.OfferArray);
    dispatch(loadOfferArray(data));
    dispatch(setDataLoadedStatus(true));
  },
);
