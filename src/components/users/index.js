import React, { useState, useEffect } from 'react';
import { UseContext } from '../synergy/synergy';
// Ui
import { Grid, Card, Image } from 'semantic-ui-react';
import CardPlaceholder from '../ui/card-placeholder';
// Components
import Name from '../ui/name';
import CommentsLabel from '../ui/comments-label';
// Utilities
import truncator from '../../utilities/truncate';
import userFinder from '../../utilities/userFinder';
import commentsFinder from '../../utilities/commentsFinder';

const Users = () => {
	const { users, routeToUser } = UseContext();
	const handleClick = e => {
		const userId = e.currentTarget.dataset.userid;
		routeToUser(userId);
	};
	return (
		<Grid>
			{users && users.length > 0 ? (
				<Grid.Row id='posts-row'>
					<Card.Group>
						{users.map(user => (
							<Card key={user.id} data-userid={user.id} onClick={handleClick}>
								<Card.Content>
									<Image
										floated='right'
										size='mini'
										src={`https://picsum.photos/id/${
											Math.floor(Math.random() * 50) + 1
										}/200`}
									/>
									<Card.Header>{user.name}</Card.Header>
									<Card.Meta>{user.username}</Card.Meta>
									<Card.Description>
										{`${user.name} works for ${user.company.name}, a ${user.company.catchPhrase}. Their thing is to "${user.company.bs}"`}
									</Card.Description>
								</Card.Content>
							</Card>
						))}
					</Card.Group>
				</Grid.Row>
			) : (
				CardPlaceholder
			)}
		</Grid>
	);
};
export default Users;
