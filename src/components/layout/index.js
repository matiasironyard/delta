import React from 'react';
import { Grid, Image, Container } from 'semantic-ui-react';
import NavMenu from './nav/index';

const Layout = ({ children }) => {
	return (
		<Grid id='app-wrapper'>
			<Grid.Row>
				<Grid.Column width='16' id='nav-header'>
					<Image
						size='small'
						src='https://www.deltadefense.com/public/img/USCCA-DD-logo.png'
					/>
				</Grid.Column>
				<NavMenu />
			</Grid.Row>
			<Grid.Row>
				<Grid.Column width={16}>
					<Grid.Row>
						<Container>{children}</Container>
					</Grid.Row>
				</Grid.Column>
			</Grid.Row>
			<Grid.Row id='app-footer'>
				<Grid.Column width={16}>
					© 2003-2020 Delta Defense, LLC. All Rights Reserved. Reproduction
					without permission prohibited.
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
};

export default Layout;
