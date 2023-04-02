import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store ={store}>
  <React.StrictMode>
    <App />
    <ToastContainer />
  </React.StrictMode>,
  </Provider>
  </BrowserRouter>
)
