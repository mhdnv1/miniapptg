import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from './providers/RouteProvider'
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter />
  </React.StrictMode>,
)
