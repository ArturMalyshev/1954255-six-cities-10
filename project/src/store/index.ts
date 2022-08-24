import { reducer } from './reducer';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from '../api/api';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
