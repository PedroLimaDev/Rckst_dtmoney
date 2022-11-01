import React from "react";
import { useTransactions } from "../../hooks/useTransactions";

import { StyledTransactionsTable } from "./styles";

export const TransactionsTable = () => {
	const { transactionsList } = useTransactions();

	return (
		<StyledTransactionsTable>
			<table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Value</th>
						<th>Category</th>
						<th>Date</th>
					</tr>
				</thead>

				<tbody>
					{transactionsList.map(transaction => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>{new Intl.NumberFormat("pr-BR", {
								style: "currency",
								currency: "BRL"
							}).format(transaction.amount)}</td>
							<td>{transaction.category}</td>
							<td>{new Intl.DateTimeFormat("pt-BR").format(
								new Date(transaction.createdAt)
							)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</StyledTransactionsTable>
	);
};