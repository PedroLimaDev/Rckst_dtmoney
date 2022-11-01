import { ReactNode } from "react";

export type TTransaction = {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: string;
}

export type TTransactionsProviderProps = {
  children: ReactNode;
}

export type TCreateTransactionDto = Omit<TTransaction, "id" | "createdAt">

export type TTransactionContextData = {
  transactionsList: TTransaction[];
  createTransaction: (transaction: TCreateTransactionDto) => Promise<void>;
}