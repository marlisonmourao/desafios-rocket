import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app'
import { CoffeeContextProvider } from './context/coffee-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoffeeContextProvider>
      <App />
    </CoffeeContextProvider>
  </React.StrictMode>,
)
