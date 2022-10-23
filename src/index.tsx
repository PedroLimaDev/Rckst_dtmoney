import React from "react";
import ReactDOM from "react-dom/client";
import { createServer, Model } from "miragejs";
import { getTransactions } from "./utils/fake-services/transactions";

import { App } from "./App";

createServer({
	models: {
		transaction: Model
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: "Website Development",
					type: "deposit",
					amount: 12000,
					category: "Development",
					createdAt: new Date(),
				},
				{
					id: 2,
					title: "Rent",
					type: "withdrawal",
					amount: -5000,
					category: "Home Expenses",
					createdAt: new Date(),
				}
			]
		});
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			return this.schema.all("transaction");
		});

		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create("transaction", data);
		});
	},
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);