import React from 'react';
import Modal from 'react-modal';

import { TNewTransactionModalProps } from './types';

Modal.setAppElement('#root');

export const NewTransactionModal = ({
	isNewTransactionModalOpen,
	handleCloseNewTransactionModal,
}: TNewTransactionModalProps) => {
	return (
		<Modal
			isOpen={isNewTransactionModalOpen}
			onRequestClose={handleCloseNewTransactionModal}
		>
			<h2>Register Transaction</h2>
		</Modal>
	);
};