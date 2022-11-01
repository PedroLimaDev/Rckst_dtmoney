import React from "react";

import { Dashboard, Header, NewTransactionModal } from "./components";

import { TransactionsProvider } from "./hooks/useTransactions";

import { GlobalStyle } from "./styles/global";

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false);

	const handleOpenNewTransactionModal = () => {
		setIsNewTransactionModalOpen(true);
	};

	const handleCloseNewTransactionModal = () => {
		setIsNewTransactionModalOpen(false);
	};

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<GlobalStyle />

			{isNewTransactionModalOpen && (
				<NewTransactionModal
					isOpen={isNewTransactionModalOpen}
					onRequestClose={handleCloseNewTransactionModal}
				/>
			)}
		</TransactionsProvider>
	);
}
