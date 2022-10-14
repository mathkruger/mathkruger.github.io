import React from 'react';
import ReactDOM from 'react-dom/client';
import "terminal.css";
import "devicon";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import common_ptBR from "./translations/pt-BR/common.json";
import common_en from "./translations/en/common.json";

const lastSelectedLang = window.localStorage.getItem("selectedLanguage");

i18next.init({
  interpolation: { escapeValue: false },
  lng: lastSelectedLang ?? "en",
  resources: {
    "pt-BR": {
      common: common_ptBR
    },
    "en": {
      common: common_en
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
