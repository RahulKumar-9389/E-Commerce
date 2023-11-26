import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SearchProvider } from './context/Search.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <SearchProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchProvider>
  </Provider>
);
