import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { getTransactions } from './utils/fake-services/transactions';

import { App } from './App';

createServer({
	routes() {
		this.namespace = 'api';

		this.get('/transactions', () => {
			return getTransactions;
		});
	},
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);