import React from 'react';
import ReactDOM from 'react-dom';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react';
import App from './App';

const matomoUrl = 'https://suajornadanameditacao.matomo.cloud';

const instance = createInstance({
  disabled: process.env.NODE_ENV === 'development',
  urlBase: matomoUrl,
  siteId: 1,
  trackerUrl: `${matomoUrl}/tracking.php`,
  srcUrl: `${matomoUrl}/tracking.js`,
  linkTracking: false,
  configurations: {
    setSecureCookie: true,
    setRequestMethod: 'POST'
  }
})

ReactDOM.render(
  <MatomoProvider value={instance}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MatomoProvider>,
  document.getElementById('root')
);
