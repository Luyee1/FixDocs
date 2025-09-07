import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const AppLayout: React.FC = () => {
	return (
		<div className="app">
			<header className="topnav">
				<div></div>
				<nav>
					<NavLink to="/generator">Docs Generator</NavLink>
					<NavLink to="/reader">Smart Reader</NavLink>
				</nav>

				<div className="user">
					<Link to="/signin" className="signin-btn">
						<span className="icon">👤</span>
						<span className="text">Sign in</span>
						<span className="arrow">→</span>
					</Link>
				</div>
			</header>
			<div className="content">
				<Sidebar />
				<main>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default AppLayout;



