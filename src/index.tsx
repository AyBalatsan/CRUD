import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components' ;

const Global = createGlobalStyle`
*,*::before,*::after {
  box-sizing: border-box;
  outline: none;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
  position: relative;
  min-width: 320px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
}
button {
  cursor: pointer;
  padding: 0;
  background: transparent;
  border: none;
}

button, input {
  font-family: inherit;
}

p,h1,h2,h3,h4,h5 {
  margin: 0;
}

ul,ol {
  padding: 0;
  margin: 0;
  list-style: none;
}
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Global />      
      <App />   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
