import React from "react";

import { Dashboard, Header, NewTransactionModal } from "./components";

import { GlobalStyle } from "./styles/global";

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(true);

	const handleOpenNewTransactionModal = () => {
		setIsNewTransactionModalOpen(true);
	};
  
	const handleCloseNewTransactionModal = () => {
		setIsNewTransactionModalOpen(false);
	};

	return (
		<>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<GlobalStyle />

			<NewTransactionModal 
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseNewTransactionModal}
			/>
		</>
	);
}
