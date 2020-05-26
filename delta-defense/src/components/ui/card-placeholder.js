import React from 'react';
import { Placeholder, Grid, Segment, Header } from 'semantic-ui-react';

// Placeholder cards generator...

const CardPlaceholder = () => {
	const placeholderCard = (
		<Grid.Column key={Math.random()}>
			<Segment raised>
				<Placeholder>
					<Placeholder.Header image>
						<Placeholder.Line />
						<Placeholder.Line />
					</Placeholder.Header>
					<Placeholder.Paragraph>
						<Placeholder.Line length='medium' />
						<Placeholder.Line length='short' />
					</Placeholder.Paragraph>
				</Placeholder>
			</Segment>
		</Grid.Column>
	);
	const placeholderArray = Array(12).fill(placeholderCard);
	return (
		<div style={{ width: '100%', height: '500px', padding: '30px' }}>
			<Header>
				We're getting sh*t done...
				<Header.Subheader>Hold tight!</Header.Subheader>
			</Header>
			<Grid columns={4} stackable>
				{placeholderArray.map(item => item)}
			</Grid>
		</div>
	);
};

export default CardPlaceholder;
