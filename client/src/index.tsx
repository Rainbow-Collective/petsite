import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IdentityProvider } from './context/identityContext';
import { PetInfoProvider } from './context/petInfoContext';
import { PetNameProvider } from './context/petNameContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PetNameProvider>
      <PetInfoProvider>
        <IdentityProvider>
          <App />
        </IdentityProvider >
      </PetInfoProvider>
    </PetNameProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
