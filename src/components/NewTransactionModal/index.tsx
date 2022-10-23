import React from "react";
import Modal from "react-modal";
import { TransactionsContext } from "../../contexts/TransactionsContext";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import {
	StyledForm,
	StyledTransactionTypeContainer,
	StyledTransactionTypeButton
} from "./styles";

import { TNewTransactionModalProps } from "./types";

Modal.setAppElement("#root");

export const NewTransactionModal = ({
	isOpen,
	onRequestClose,
}: TNewTransactionModalProps) => {
	const { createTransaction } = React.useContext(TransactionsContext);

	const [title, setTitle] = React.useState("");
	const [amount, setAmount] = React.useState(0);
	const [category, setCategory] = React.useState("");

	const [type, setType] = React.useState("deposit");

	const handleCreateNewTransaction = (event: React.FormEvent) => {
		event.preventDefault();

		createTransaction({
			title,
			amount,
			category,
			type,
		});
	};

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

			<StyledForm onSubmit={handleCreateNewTransaction}>
				<h2>Register Transaction</h2>

				<input
					type="text"
					placeholder="Title"
					onChange={event => setTitle(event.target.value)}
					value={title}
				/>

				<input
					type="number"
					placeholder="Value"
					onChange={event => setAmount(Number(event.target.value))}
					value={amount}
				/>

				<StyledTransactionTypeContainer>
					<StyledTransactionTypeButton
						type="button"
						onClick={() => setType("deposit")}
						isActive={type === "deposit"}
						activeColor="green"
					>
						<img src={incomeImg} alt="Income" />
						<span>Income</span>
					</StyledTransactionTypeButton>

					<StyledTransactionTypeButton
						type="button"
						onClick={() => setType("withdrawal")}
						isActive={type === "withdrawal"}
						activeColor="red"
					>
						<img src={outcomeImg} alt="Outcome" />
						<span>Outcome</span>
					</StyledTransactionTypeButton>
				</StyledTransactionTypeContainer>

				<input
					type="text"
					placeholder="Category"
					onChange={event => setCategory(event.target.value)}
					value={category}
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