import React from 'react';
import ReactDOM from 'react-dom/client';
import 'semantic-ui-css/semantic.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './app/layout/style.css';
import App from './app/layout/App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import { Provider } from 'react-redux';
import { configurStore } from './app/store/configureStore';
import ScrollToTop from './app/layout/ScrollToTop';
import { loadEvents } from './features/events/eventAction';

const store = configurStore()

store.dispatch(loadEvents())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </Provider>

);

