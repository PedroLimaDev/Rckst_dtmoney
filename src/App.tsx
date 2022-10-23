import React from "react";

import { Dashboard, Header, NewTransactionModal } from "./components";

import { TransactionsContext } from "./contexts/TransactionsContext";

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
		<TransactionsContext.Provider value={[]}>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<GlobalStyle />

			<NewTransactionModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
		</TransactionsContext.Provider>
	);
}
