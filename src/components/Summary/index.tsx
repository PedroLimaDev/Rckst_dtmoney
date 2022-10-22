import React from 'react';
import IncomeImg from '../../assets/income.svg';
import OutcomeImg from '../../assets/outcome.svg';
import TotalImg from '../../assets/total.svg';

import { StyledSummary, StyledCard } from './styles';

export const Summary = () => {
	return (
		<StyledSummary>
			<StyledCard>
				<header>
					<p>Entradas</p>
					<img src={IncomeImg} alt="Entradas" />
				</header>
				<strong>R$1000.00</strong>
			</StyledCard>
			<StyledCard>
				<header>
					<p>Saídas</p>
					<img src={OutcomeImg} alt="Saídas" />
				</header>
				<strong>-R$500.00</strong>
			</StyledCard>
			<StyledCard className='highlight-background'>
				<header>
					<p>Total</p>
					<img src={TotalImg} alt="Total" />
				</header>
				<strong>R$500.00</strong>
			</StyledCard>
		</StyledSummary>
	);
};