import React, { createContext, useContext } from "react";
import { api } from "../services/api";
import { isNil } from "ramda";

import {
	TTransaction,
	TTransactionsProviderProps,
	TCreateTransactionDto,
	TTransactionContextData,
} from "./types";

const TransactionsContext = createContext<TTransactionContextData>(
  {} as TTransactionContextData
);

export const TransactionsProvider = ({ children }: TTransactionsProviderProps) => {
	const [transactionsList, setTransactionsList] = React.useState<TTransaction[]>([]);

	React.useEffect(() => {
		api.get("/transactions")
			.then(response => setTransactionsList(response.data.transactions));
	}, []);

	const createTransaction = async (transactionInput: TCreateTransactionDto) => {
		const response = await api.post("/transactions", {
			...transactionInput,
			createdAt: new Date(),
		});

		if (isNil(response)) return;

		const { transaction } = response.data;

		setTransactionsList([
			...transactionsList,
			transaction,
		]);
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

export const useTransactions = () => {
	return useContext(TransactionsContext);
};