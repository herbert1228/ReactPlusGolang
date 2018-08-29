import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App';
// import Game from './client/Game';
import registerServiceWorker from './registerServiceWorker';
import './client/css/index.css' //TODO margin: 8 without css

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
