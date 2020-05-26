import React, { useState } from 'react';
import { UseContext } from '../../synergy/synergy';

import { Menu } from 'semantic-ui-react';

const NavMenu = () => {
	const { routeToUri } = UseContext();

	const [activeItem, setActiveItem] = useState({});

	const handleItemClick = (e, { name }) => {
		setActiveItem(name);
		routeToUri(name);
	};

	return (
		<Menu pointing secondary fluid id='app-menu'>
			<Menu.Item header className='menu-logo'>
				Company Blog
			</Menu.Item>
			<Menu.Item
				name='posts'
				active={activeItem === 'posts'}
				onClick={handleItemClick}
			/>
			<Menu.Item
				name='users'
				active={activeItem === 'users'}
				onClick={handleItemClick}
			/>
		</Menu>
	);
};
export default NavMenu;
