import React from 'react';
import ReactDOM from 'react-dom/client';
import Offer from './components/offer/offer';
import MainPage from './pages/main/main';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <MainPage>
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
    </MainPage>
  </React.StrictMode>,
);
