import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import './FirebaseInit.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Temp = () => (
	<h1>React Component</h1>
)

// ReactDOM.render(<Temp />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
// const worker = new Worker('worker.js');
// worker.postMessage(time);
//
// worker.addEventListener()
