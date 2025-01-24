import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';
import 'animate.css';
import './assets/styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
