import React from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";

import { StyledForm } from "./styles";

import { TNewTransactionModalProps } from "./types";

Modal.setAppElement("#root");

export const NewTransactionModal = ({
	isOpen,
	onRequestClose,
}: TNewTransactionModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImg} alt="Close Modal" />
			</button>

			<StyledForm>
				<h2>Register Transaction</h2>

				<input
					type="text"
					placeholder="Title"
				/>

				<input
					type="number"
					placeholder="Value"
				/>

				<input
					type="text"
					placeholder="Category"
				/>

				<button
					type="submit"
				>
					Create
				</button>
			</StyledForm>
		</Modal>
	);
};