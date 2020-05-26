import { UseContext } from '../components/synergy/synergy';

const userFinder = (userId, blogUsers) => {
	const user = blogUsers.filter(x => x.id === userId);
	return user;
};

export default userFinder;
