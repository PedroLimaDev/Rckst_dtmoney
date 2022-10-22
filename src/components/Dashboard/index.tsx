import React from 'react';
import { Summary } from '../Summary';

import { StyledDashboard } from './styles';

export const Dashboard = () => {
	return (
		<StyledDashboard>
			<Summary />
		</StyledDashboard>
	);
};