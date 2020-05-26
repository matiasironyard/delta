import React, { useState, useEffect } from 'react';
import { UseContext } from '../synergy/synergy';
// Ui
import { Grid, Card } from 'semantic-ui-react';
import CardPlaceholder from '../ui/card-placeholder';
// Components
import Name from '../ui/name';
import CommentsLabel from '../ui/comments-label';
// Utilities
import truncator from '../../utilities/truncate';
import userFinder from '../../utilities/userFinder';
import commentsFinder from '../../utilities/commentsFinder';

const Posts = () => {
	const { posts, users, comments, routeToDetails } = UseContext();
	const handleClick = e => {
		const postId = e.currentTarget.dataset.postid;
		const userId = e.currentTarget.dataset.userid;
		routeToDetails(postId, userId);
	};
	return (
		<Grid stackable columns={4}>
			{posts && posts.length > 0 ? (
				<Grid.Row id='posts-row'>
					{posts.map((item, i) => {
						return (
							<Grid.Column
								key={item.title}
								data-postId={item.id}
								data-userId={item.userId}
								onClick={handleClick}
								className='post-column'
							>
								<Card
									fluid
									image={`https://picsum.photos/id/${
										Math.floor(Math.random() * 50) + 1
									}/200/300`}
									header={truncator(item.title, 3)}
									meta={<Name userId={item.userId} />}
									description={truncator(item.body, 8)}
									extra={<CommentsLabel id={item.id} />}
								/>
							</Grid.Column>
						);
					})}
				</Grid.Row>
			) : (
				<CardPlaceholder />
			)}
		</Grid>
	);
};
export default Posts;
