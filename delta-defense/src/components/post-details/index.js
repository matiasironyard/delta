import React, { useEffect } from 'react';
import { UseContext } from '../synergy/synergy';
import { Grid, Image, Header, Comment } from 'semantic-ui-react';
import PostPlaceholder from '../ui/post-placeholder';

const PostDetails = () => {
	const { getPostDetails, postDetails, routeToUser } = UseContext();

	useEffect(() => {
		getPostDetails();
	}, []);
	const handleUser = () => {
		routeToUser(postDetails.userData.id);
	};
	return (
		<Grid>
			{postDetails && postDetails.postData ? (
				<Grid.Row>
					<Grid.Column width={5}>
						<Image src='https://picsum.photos/200/300?random=1' fluid />
					</Grid.Column>
					<Grid.Column width={8}>
						<Header as='h1'>
							{postDetails.postData.title}
							<Header.Subheader className='post-author' onClick={handleUser}>
								By {postDetails.userData.name}
							</Header.Subheader>
						</Header>
						<p>{postDetails.postData.body}</p>
						<Comment.Group>
							<Header as='h3' dividing>
								Comments
							</Header>
							{postDetails.commentsData.map(item => {
								return (
									<Comment key={item.email}>
										<Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
										<Comment.Content>
											<Comment.Author as='a'>{item.email}</Comment.Author>
											<Comment.Metadata>
												<div>
													<b>{item.name}</b>
												</div>
											</Comment.Metadata>
											<Comment.Text>{item.body}</Comment.Text>
											<Comment.Actions>
												<Comment.Action>Reply</Comment.Action>
											</Comment.Actions>
										</Comment.Content>
									</Comment>
								);
							})}
						</Comment.Group>
					</Grid.Column>
				</Grid.Row>
			) : (
				<PostPlaceholder />
			)}
		</Grid>
	);
};
export default PostDetails;
