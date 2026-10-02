import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// redux
import { Provider } from 'react-redux'
import { store } from './store.jsx'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
