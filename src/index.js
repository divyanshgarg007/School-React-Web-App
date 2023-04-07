import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import {GoogleOAuthProvider} from '@react-oauth/google'
import App from './views/App/App'
import reportWebVitals from './reportWebVitals'
import configureStore from './redux/store'
import './i18n'


const store = configureStore()
ReactDOM.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="597738059945-visj7hauvtjknudq8bqjt2dlhjhfkcgn.apps.googleusercontent.com">
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
