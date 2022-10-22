import React from 'react';

import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';

import { StyledDashboard } from './styles';

export const Dashboard = () => {
	return (
		<StyledDashboard>
			<Summary />
			<TransactionsTable />
		</StyledDashboard>
	);
};