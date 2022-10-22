import React from 'react';

import logoImg from '../../assets/logo.svg';

import { 
	StyledHeader, 
	StyledContent,
	StyledButton,
} from './styles';

export const Header = () => {
	return (
		<StyledHeader>
			<StyledContent>
				<img src={logoImg} alt="dt money" />		

				<StyledButton type='button'>
        Nova Tansação
				</StyledButton>
			</StyledContent>
		</StyledHeader>
	);
};