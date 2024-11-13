import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import { Provider } from 'react-redux'
// import { store } from './reducers/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
    {/* </Provider> */}
  </React.StrictMode>,
)
