import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './core/components/App';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
