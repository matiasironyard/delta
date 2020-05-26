import React from 'react';
import { UseContext } from '../synergy/synergy';
// Ui
import { Grid, Card, Image } from 'semantic-ui-react';
import CardPlaceholder from '../ui/card-placeholder';

const Users = () => {
	const { users, routeToUser } = UseContext();
	const handleClick = e => {
		const userId = e.currentTarget.dataset.userid;
		routeToUser(userId);
	};
	return (
		<Grid stackable columns={3}>
			{users && users.length > 0 ? (
				<Grid.Row id='posts-row'>
					{users.map(user => (
						<Grid.Column className='post-column'>
							<Card
								key={user.id}
								fluid
								data-userid={user.id}
								onClick={handleClick}
							>
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
						</Grid.Column>
					))}
				</Grid.Row>
			) : (
				CardPlaceholder
			)}
		</Grid>
	);
};
export default Users;
