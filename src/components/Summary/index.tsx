import React from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";

import { StyledSummary, StyledCard } from "./styles";

export const Summary = () => {
	const { transactionsList } = React.useContext(TransactionsContext);

	return (
		<StyledSummary>
			<StyledCard>
				<header>
					<p>Income</p>
					<img src={IncomeImg} alt="Income" />
				</header>
				<strong>R$1000.00</strong>
			</StyledCard>
			<StyledCard>
				<header>
					<p>Outcome</p>
					<img src={OutcomeImg} alt="Outcome" />
				</header>
				<strong>-R$500.00</strong>
			</StyledCard>
			<StyledCard className="highlight-background">
				<header>
					<p>Total</p>
					<img src={TotalImg} alt="Total" />
				</header>
				<strong>R$500.00</strong>
			</StyledCard>
		</StyledSummary>
	);
};