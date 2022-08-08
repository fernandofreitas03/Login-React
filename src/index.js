import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './containers/Home';
import GlobalStyle from "./globalStyle"

const root = createRoot(document.getElementById('root'));

root.render(<React.StrictMode><Home /> <GlobalStyle /></React.StrictMode>);


