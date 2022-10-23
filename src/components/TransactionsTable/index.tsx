import React from "react";
import { api } from "../../services/api";

import { StyledTransactionsTable } from "./styles";

type TTransaction = {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export const TransactionsTable = () => {
	const [transactionsList, setTransactionsList] = React.useState<TTransaction[]>([]);

	React.useEffect(() => {
		api.get("/transactions")
			.then(response => setTransactionsList(response.data.transactions));
	}, []);

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