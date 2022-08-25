import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOfferArray, redirectToRoute, setAuthorizationStatus, setDataLoadedStatus} from './action';
import {APIRoute, AppRoute} from '../mocks/offer';
import {AppDispatch, State} from '../types/Store';
import {AuthData, OfferFromServer, userConfiguration} from '../types/Offer';
import {dropToken, saveToken} from '../services/token';

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

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLogin',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<userConfiguration>(APIRoute.Login, {email, password});
    dispatch(setAuthorizationStatus(data));
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.main));
  },
);

export const checkloginAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/checkLogin',
  async (none, {dispatch, extra: api}) => {
    await api.get(APIRoute.Login).then( (data) => {
      dispatch(setAuthorizationStatus(data.data));
    });
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLogout',
  async (none, {dispatch, extra: api}) => {
    api.delete(APIRoute.Logout).then(()=>{
      dropToken();
      dispatch(setAuthorizationStatus(false));
      dispatch(redirectToRoute(AppRoute.login));
    });
  },
);
