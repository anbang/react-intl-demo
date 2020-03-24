import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { IntlProvider } from 'react-intl';
import en from './i18n/en.js';
import zh from './i18n/zh.js';

const Root = () => {
  // const local = navigator.language;
  const [locale, setLocale] = useState(navigator.language);

  // console.log('local', locale, setLocale);
  console.log('local', locale);

  let messages;
  if (locale.includes('zh')) {
    messages = zh;
  } else {
    messages = en;
  }

  return (
    <React.StrictMode>
      <IntlProvider
        locale={locale}
        key={locale}
        // defaultLocale="en"
        messages={messages}>
        <App setLocale={setLocale} />
      </IntlProvider >
    </React.StrictMode>
  )
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
