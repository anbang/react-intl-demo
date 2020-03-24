import React from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';

// 从 props 拿 index 的 setLocale 方法

function App({ setLocale }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <div>
          <button onClick={() => setLocale('en')}>英文</button>
          <button onClick={() => setLocale('zh-CN')}>中文1</button>
        </div>
        <hr />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* 使用 FormattedMessage */}
          <FormattedMessage id="app.learn" values={{ name: '安邦的笔记' }} />
        </a>
      </header>
    </div>
  );
}

export default App;
