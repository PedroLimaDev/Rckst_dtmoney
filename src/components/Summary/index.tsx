import React from "react";
import { useTransactions } from "../../hooks/useTransactions";

import IncomeImg from "../../assets/income.svg";
import OutcomeImg from "../../assets/outcome.svg";
import TotalImg from "../../assets/total.svg";

import { StyledSummary, StyledCard } from "./styles";

export const Summary = () => {
	const { transactionsList } = useTransactions();

	const summary = transactionsList.reduce((acc, transaction) => {
		if (transaction.type === "deposit") {
			acc.deposits += transaction.amount;
			acc.total += transaction.amount;
		}

		if (transaction.type === "withdrawal") {
			acc.withdrawals -= transaction.amount;
			acc.total -= transaction.amount;
		}

		return acc;
	}, {
		deposits: 0,
		withdrawals: 0,
		total: 0,
	});

	return (
		<StyledSummary>
			<StyledCard>
				<header>
					<p>Income</p>
					<img src={IncomeImg} alt="Income" />
				</header>
				<strong>
					{new Intl.NumberFormat("pr-BR", {
						style: "currency",
						currency: "BRL"
					}).format(summary.deposits)}
				</strong>
			</StyledCard>
			<StyledCard>
				<header>
					<p>Outcome</p>
					<img src={OutcomeImg} alt="Outcome" />
				</header>
				<strong>
					{new Intl.NumberFormat("pr-BR", {
						style: "currency",
						currency: "BRL"
					}).format(summary.withdrawals)}
				</strong>
			</StyledCard>
			<StyledCard className="highlight-background">
				<header>
					<p>Total</p>
					<img src={TotalImg} alt="Total" />
				</header>
				<strong>
					{new Intl.NumberFormat("pr-BR", {
						style: "currency",
						currency: "BRL"
					}).format(summary.total)}
				</strong>
			</StyledCard>
		</StyledSummary>
	);
};