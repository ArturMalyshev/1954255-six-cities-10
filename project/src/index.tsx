import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {useAppSelector} from './hooks/redux/redux';
import { store } from './store';

import LoadingScreen from './pages/loading_screen/loading_screen';

import OfferList from './components/offer_list/offer_list';
import CommentForm from './components/comment_form/comment_form';

import MainPage from './pages/main/main';
import ErrorPage from './pages/error_404/error_404';
import FavoritesPage from './pages/favorites/favorites';
import LoginPage from './pages/login/login';
import PropertyPage from './pages/property/property';
import {fetchOfferAction} from './store/api-action';
import {getOfferMode} from './mocks/offer';
import PrivateRoute from './components/private_route/private_route';

store.dispatch(fetchOfferAction({mode: getOfferMode.OfferArray}));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export default function App() : JSX.Element {
  const dataLoaded = useAppSelector((state) => state.isDataLoaded);
  const offerArray = useAppSelector((state) => state.offerArray);
  const commentFormState = useAppSelector((state) => state.commentButton);

  if (!dataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {
            <MainPage itemsArray={{data: offerArray}}>
              <OfferList data={offerArray} />
            </MainPage>
          }
          />
          <Route path="login">
            <Route index element = {
              <LoginPage />
            }
            />
          </Route>
          <Route path="favorites">
            <Route index element = {
              <PrivateRoute>
                <FavoritesPage>
                  <OfferList data={offerArray} />
                </FavoritesPage>
              </PrivateRoute>
            }
            />
          </Route>
          <Route path="offer/:id">
            <Route index element = {
              <PropertyPage data={offerArray} child={ <CommentForm state={ commentFormState } /> } />
            }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<Provider store={store}><App /></Provider>);
