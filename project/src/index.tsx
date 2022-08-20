import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {useAppSelector} from './hooks/redux/redux';
import { store } from './store/index';

import getMockOfferData from './mocks/offer';

import { OfferArrayType } from './types/Offer';

import PrivareRoute from './components/private_route/private_route';
import OfferList from './components/offer_list/offer_list';
import CommentForm from './components/comment_form/comment_form';

import MainPage from './pages/main/main';
import ErrorPage from './pages/error_404/error_404';
import FavoritesPage from './pages/favorites/favorites';
import LoginPage from './pages/login/login';
import PropertyPage from './pages/property/property';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export default function App(data: OfferArrayType) : JSX.Element {
  const offerArray = useAppSelector((state) => state.offerArray);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {
            <MainPage itemsArray={data}>
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
              <PrivareRoute>
                <FavoritesPage>
                  <OfferList data={data.data} />
                </FavoritesPage>
              </PrivareRoute>
            }
            />
          </Route>
          <Route path="offer/:id">
            <Route index element = {
              <PropertyPage data={data.data} child={<CommentForm />}/>
            }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<Provider store={store}><App data={getMockOfferData()} /></Provider>);
