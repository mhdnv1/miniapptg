import ReactDOM from 'react-dom/client'
import { BrowserRouter } from './providers/RouteProvider'
import { Provider } from 'react-redux';
import { store } from '../services/store';
import './styles/style.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter />
  </Provider>,
)
