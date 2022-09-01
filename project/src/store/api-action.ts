import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  addOffers, getComments,
  loadOfferArray,
  loadOneOffer,
  redirectToRoute,
  setAuthorizationStatus,
  setDataLoadedStatus,
  updateCommentForm, updateFavoriteList
} from './action';
import {APIRoute, AppRoute, CommentFormState, getOfferMode} from '../mocks/offer';
import {AppDispatch, State} from '../types/Store';
import {
  AddToFavorites,
  AuthData,
  CommentType,
  OfferFromServer,
  SetCommentType,
  userConfiguration
} from '../types/Offer';
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
    dispatch(redirectToRoute(AppRoute.Main));
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
      dispatch(redirectToRoute(AppRoute.Login));
    });
  },
);

export const setCommentAction = createAsyncThunk<void, SetCommentType , {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchLogout',
  async ({comment, rating, offerId}, {dispatch, extra: api}) => {
    dispatch(updateCommentForm(CommentFormState.Loading));
    api.post<CommentType[]>(APIRoute.Comments + offerId, {comment, rating})
      .then(
        (result) => {
          dispatch(getComments(result.data));
          dispatch(updateCommentForm(CommentFormState.Ready));
        },
        () => {
          dispatch(updateCommentForm(CommentFormState.Error));
        }
      );
  },
);

export const getFavoriteList = createAsyncThunk<void, undefined , {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/getFavorites',
  async ( data, {dispatch, extra: api}) => {
    api.get<OfferFromServer[]>(APIRoute.Favorite).then(
      (result) => {
        dispatch(updateFavoriteList(result.data));
      }
    );
  },
);

export const addToFavorites = createAsyncThunk<void, AddToFavorites , {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addToFavorites',
  async ({offerId, mode}, {dispatch, extra: api}) => {
    api.post<CommentType[]>(`${ APIRoute.Favorite }/${offerId}/${mode}`).then(
      () => {
        dispatch(getFavoriteList());
      }
    );
  },
);

