import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import {
	AiOutlineHome,
	AiOutlineNotification,
	AiOutlineMessage,
	AiOutlineSearch,
	AiFillPlusSquare,
	AiOutlinePlusSquare,
} from 'react-icons/ai';
const iconstyle = 'text-2xl text-white';

function Navbar() {
	const navigate = useNavigate();
	const userDetails = useSelector((state) => state.auth.userData);
	const [isOpen, setOpen] = useState(false);
	const iconstyle = 'text-md text-white';
	const navitems = [
		{
			key: 'home',
			icon: <AiOutlineHome className={iconstyle} />,
			name: 'Home',
			onClick: () => navigate('/'),
		},
		{
			key: 'notification',
			icon: <AiOutlineNotification className={iconstyle} />,
			name: 'Notification',
			onClick: () => {
				navigate('/notification');
			},
		},
		{
			key: 'message',
			icon: <AiOutlineMessage className={iconstyle} />,
			name: 'Message',
			onClick: () => {
				navigate('/message');
			},
		},
		{
			key: 'create',
			icon: <AiOutlinePlusSquare className={iconstyle} />,
			name: 'Create Mess',
			onClick: () => {
				navigate('/create-new-mess');
			},
		},
		{
			key: 'user',
			icon: <AiOutlineUser className={iconstyle} />,
			name: 'User',
			onClick: () => {
				navigate('/user');
			},
		},
	];

	return (
		<>
			<nav className='bg-gray-800 w-full'>
				<div className=' flex items-center justify-between  gap-4   sm:px-10 py-4 px-4 '>
					<div
						className='md:block hidden items-center cursor-pointer hover:bg-gray-700 rounded-full text-lg font-medium'
						onClick={() => {
							navigate('/');
						}}
					>
						<img
							className=' h-10 w-auto'
							src='/favicon.png'
							alt=''
						/>
					</div>

					<div
						className={`${
							isOpen
								? 'flex flex-col h-[50vh] transition-all duration-500 py-10'
								: 'hidden h-0'
						} grow gap-6 text-gray-500 z-10 sm:flex sm:static absolute inset-0 sm:h-full py-2  sm:justify-around bg-gray-700 px-4  rounded-lg`}
					>
						{navitems.map((item, index) => {
							return (
								<div
									key={index}
									className='flex flex-col justify-center items-center  cursor-pointer'
									onClick={item.onClick}
								>
									<div>{item.icon}</div>
									<p className='text-white'>{item.name}</p>
								</div>
							);
						})}
					</div>

					<div className='sm:hidden z-10 '>
						<Hamburger
							toggled={isOpen}
							toggle={setOpen}
						/>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
