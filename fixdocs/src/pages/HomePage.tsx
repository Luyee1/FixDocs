import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
	return (
		<div className="home">
			<section className="hero">
				<div className="hero-content">
					<h1>Generate Documentation. Smarter. Faster.</h1>
					<p className="subheadline">AI-powered documentation generator that saves time and keeps your project always up to date.</p>
					<div className="cta">
						<Link to="/generator" className="btn btn-lg">Try Now</Link>
						<a href="#how-it-works" className="btn-ghost btn-lg">How it works</a>
					</div>
				</div>
				<div className="hero-visual">
					<div className="doc-illustration" aria-hidden="true">
						<div className="doc-page">
							<div className="doc-line"></div>
							<div className="doc-line short"></div>
							<div className="doc-line"></div>
							<div className="doc-line"></div>
						</div>
						<div className="sparkles">
							<span>✨</span><span>✨</span><span>✨</span>
						</div>
					</div>
				</div>
			</section>

			<section className="features" aria-label="Key features">
				<h2>Key Features</h2>
				<div className="feature-grid">
					<div className="feature-card">📄 Auto-generate API docs</div>
					<div className="feature-card">🔍 Smart Reader with summaries & queries</div>
					<div className="feature-card">📝 AI Suggestions (rewrite, fix style, changelog)</div>
					<div className="feature-card">📊 Integration with GitHub</div>
				</div>
			</section>

			<section id="how-it-works" className="how" aria-label="How it works">
				<h2>How It Works</h2>
				<ol className="how-grid">
					<li>
						<div className="step">1</div>
						<p>Upload repo / connect GitHub</p>
					</li>
					<li>
						<div className="step">2</div>
						<p>AI generates & improves docs</p>
					</li>
					<li>
						<div className="step">3</div>
						<p>Download or sync with your project</p>
					</li>
				</ol>
			</section>
		</div>
	);
};

export default HomePage;



