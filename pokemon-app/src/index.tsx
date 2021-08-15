import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
//import ReduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { allReducers } from './reducers';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { watchFetchPokemon } from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	allReducers,
	composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(watchFetchPokemon);

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
);
