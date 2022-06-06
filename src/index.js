import React from 'react'
import * as ReactDom from 'react-dom/client'
import 'semantic-ui-css/semantic.min.css';

import App from './App'

const root = ReactDom.createRoot(document.querySelector('#root'));
root.render(<App />)