import React, { createContext } from "react";
import { api } from "../services/api";

import {
	TTransaction,
	TTransactionsProviderProps,
	TCreateTransactionDto,
	TTransactionContextData,
} from "./types";

export const TransactionsContext = createContext<TTransactionContextData>(
  {} as TTransactionContextData
);

export const TransactionsProvider = ({ children }: TTransactionsProviderProps) => {
	const [transactionsList, setTransactionsList] = React.useState<TTransaction[]>([]);

	React.useEffect(() => {
		api.get("/transactions")
			.then(response => setTransactionsList(response.data.transactions));
	}, []);

	const createTransaction = (transaction: TCreateTransactionDto) => {
		api.post("/transactions", transaction);
	};

	const contextProps: TTransactionContextData = {
		transactionsList,
		createTransaction,
	};

	return (
		<TransactionsContext.Provider value={contextProps}>
			{children}
		</TransactionsContext.Provider>
	);
};