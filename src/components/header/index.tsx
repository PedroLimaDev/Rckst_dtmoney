import React from 'react';
import logoImg from '../../assets/logo.svg';

import type { THeaderProps } from './types';

import { 
	StyledHeader, 
	StyledContent,
	StyledButton,
} from './styles';

export const Header = ({
	onOpenNewTransactionModal
}: THeaderProps) => {
	return (
		<StyledHeader>
			<StyledContent>
				<img src={logoImg} alt="dt money" />		

				<StyledButton 
					type='button'
					onClick={onOpenNewTransactionModal}
				>
          New Transaction
				</StyledButton>
			</StyledContent>


		</StyledHeader>
	);
};