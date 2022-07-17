import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Offer from './components/offer/offer';
import PrivareRoute from './components/private_route/private_route';

import MainPage from './pages/main/main';
import ErrorPage from './pages/error_404/error_404';
import FavoritesPage from './pages/favorites/favorites';
import LoginPage from './pages/login/login';
import Property from './pages/property/property';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element = {
            <MainPage>
              <Offer />
              <Offer />
              <Offer />
              <Offer />
              <Offer />
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
                <FavoritesPage />
              </PrivareRoute>
            }
            />
          </Route>
          <Route path="offer/:id">
            <Route index element = {
              <Property />
            }
            />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

root.render(<App />);
