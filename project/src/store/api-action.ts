import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  addOffers, getComments,
  loadOfferArray,
  loadOneOffer,
  redirectToRoute,
  setAuthorizationStatus,
  setDataLoadedStatus
} from './action';
import {APIRoute, AppRoute, getOfferMode} from '../mocks/offer';
import {AppDispatch, State} from '../types/Store';
import {AuthData, CommentType, OfferFromServer, userConfiguration} from '../types/Offer';
import {dropToken, saveToken} from '../services/token';

export const fetchOfferAction = createAsyncThunk<void, { mode: number, offerId?: number }, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async ({mode, offerId}, {dispatch, extra: api}) => {
    if (mode === getOfferMode.OfferArray) {

      const {data} = await api.get<OfferFromServer[]>(APIRoute.OfferArray);
      dispatch(loadOfferArray(data));

    } else if (mode === getOfferMode.OneOffer) {

      const {data} = await api.get<OfferFromServer>(APIRoute.Offer + offerId);
      dispatch(loadOneOffer(data));

    } else if (mode === getOfferMode.NearbyOffers) {

      const main = await api.get<OfferFromServer>(APIRoute.Offer + offerId);
      const nearby = await api.get<OfferFromServer[]>(`${ APIRoute.Offer + offerId }/nearby`);
      const summaryArray = [main.data];
      nearby.data.map((elem) => {
        summaryArray.push(elem);
      });
      dispatch(addOffers(summaryArray));

      const {data} = await api.get<CommentType[]>(APIRoute.Comments + offerId);
      dispatch(getComments(data));

    }
    dispatch(setDataLoadedStatus(true));
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLogin',
  async ({login: email, password: password}, {dispatch, extra: api}) => {
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
    const { data } = await api.get(APIRoute.Login);
    dispatch(setAuthorizationStatus(data));
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
