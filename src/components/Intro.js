import isEmpty from 'lodash/isEmpty';

import React, {useContext} from 'react';
import UserContext         from '../context/userContext';

const Intro = () =>
{
	const user = useContext(UserContext);

	if (!isEmpty(user))
	{
		return <></>;
	}

	return (
		<div className='p-5 rounded-lg jumbotron'>
			<h1 className='display-4'>
				{'Factorio Prints'}
			</h1>
			<p className='lead'>
				{'This is a site to share blueprints for the game '}
				<a href='https://www.factorio.com/'>
					{'Factorio'}
				</a>
				{'.'}
			</p>
			<p className='lead'>
				{'Blueprints can be exported from the game using the in-game blueprint manager.'}
				{' ['}
				<a href='https://www.youtube.com/watch?v=7FD4Gehe29E'>
					{'Video Tutorial'}
				</a>
				{']'}
			</p>
			<p className='lead'>
				{'There is also limited support for the 0.14 blueprint mods '}
				<a href='https://mods.factorio.com/mods/DaveMcW/blueprint-string'>
					Blueprint String
				</a>
				{', '}
				<a href='https://mods.factorio.com/mods/Choumiko/Foreman'>
					{'Foreman'}
				</a>
				{', and '}
				<a href='https://mods.factorio.com/mods/killkrog/KBlueprints'>
					{'Killkrog\'s Blueprint Manager'}
				</a>
			</p>
		</div>
	);
};

export default Intro;
