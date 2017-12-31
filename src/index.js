import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// main styles for app
import './styles/styles.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

registerServiceWorker();
