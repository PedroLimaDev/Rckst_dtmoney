import React from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";

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
	const { createTransaction } = useTransactions();

	const [title, setTitle] = React.useState("");
	const [amount, setAmount] = React.useState(0);
	const [category, setCategory] = React.useState("");

	const [type, setType] = React.useState("deposit");

	const resetData = () => {
		// Could conditional render, but React-Modal does not like it, keeps outputting errors
		setTitle("");
		setAmount(0);
		setCategory("");
		setType("deposit");
	};

	const handleCreateNewTransaction = async (event: React.FormEvent) => {
		event.preventDefault();

		await createTransaction({
			title,
			amount,
			category,
			type,
		});

		resetData();
		onRequestClose();
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