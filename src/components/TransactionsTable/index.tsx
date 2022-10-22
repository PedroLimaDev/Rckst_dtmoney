import React from 'react';

import { StyledTransactionsTable } from './styles';

export const TransactionsTable = () => {
	return (
		<StyledTransactionsTable>
			<table>
				<tr>
					<th>Title</th>
					<th>Value</th>
					<th>Category</th>
					<th>Date</th>
				</tr>

				<tbody>
					<tr>
						<td>Website Development</td>
						<td className='deposit'>R$12.000</td>
						<td>Development</td>
						<td>20/02/2022</td>
					</tr>
					<tr>
						<td>Rent</td>
						<td className='withdrawal'>- R$12.000</td>
						<td>Home Expenses</td>
						<td>20/02/2022</td>
					</tr>
				</tbody>
			</table>
		</StyledTransactionsTable>
	);
};