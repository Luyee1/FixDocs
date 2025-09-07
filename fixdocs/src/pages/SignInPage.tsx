import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInPage: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isSignUp, setIsSignUp] = useState(false);

	const handleEmailAuth = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement email authentication
		console.log('Email auth:', { email, password, isSignUp });
	};

	const handleGoogleAuth = () => {
		// TODO: Implement Google OAuth
		console.log('Google auth');
	};

	const handleGitHubAuth = () => {
		// TODO: Implement GitHub OAuth
		console.log('GitHub auth');
	};

	return (
		<div className="auth-page">
			<div className="auth-container">
				<div className="auth-header">
					<Link to="/" className="back-btn">←</Link>
					<h1>Welcome to FixDocs</h1>
					<p>Sign in to generate and manage your documentation</p>
				</div>

				<div className="auth-options">
					<button className="auth-btn google-btn" onClick={handleGoogleAuth}>
						<span className="icon">🔍</span>
						<span>Continue with Google</span>
					</button>

					<button className="auth-btn github-btn" onClick={handleGitHubAuth}>
						<span className="icon">🐙</span>
						<span>Continue with GitHub</span>
					</button>

					<div className="divider">
						<span>or</span>
					</div>

					<form className="email-form" onSubmit={handleEmailAuth}>
						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="Enter your email"
								required
							/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								id="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								placeholder="Enter your password"
								required
							/>
						</div>

						<button type="submit" className="auth-btn email-btn">
							{isSignUp ? 'Create Account' : 'Sign In'}
						</button>
					</form>

					<div className="auth-footer">
						<button 
							className="toggle-mode" 
							onClick={() => setIsSignUp(!isSignUp)}
						>
							{isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInPage;
