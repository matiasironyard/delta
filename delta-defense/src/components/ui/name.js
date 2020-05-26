import React, { useState, useEffect } from 'react';
import { UseContext } from '../synergy/synergy';

const Name = props => {
	const { users } = UseContext();
	const { userId } = props;
	const [user, setUser] = useState('');
	useEffect(() => {
		const match = users.filter(user => user.id === userId);
		setUser(match);
	}, [users, userId]);
	return <div>{user && user[0] && user[0].name}</div>;
};
export default Name;
