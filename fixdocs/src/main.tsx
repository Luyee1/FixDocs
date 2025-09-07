import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import DocsGeneratorPage from './pages/DocsGeneratorPage';
import SmartReaderPage from './pages/SmartReaderPage';
import SignInPage from './pages/SignInPage';
import './styles.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'generator', element: <DocsGeneratorPage /> },
			{ path: 'reader', element: <SmartReaderPage /> },
		],
	},
	{
		path: '/signin',
		element: <SignInPage />,
	},
]);

createRoot(document.getElementById('root')!).render(
	React.createElement(React.StrictMode, null, <RouterProvider router={router} />)
);



