import React, { useState } from 'react';


const generatedSections = [
	{ id: 'gd1', icon: '📖', text: 'API Reference' },
	{ id: 'gd2', icon: '🛠️', text: 'Setup / Installation' },
	{ id: 'gd3', icon: '👤', text: 'User Guide' },
	{ id: 'gd4', icon: '🔧', text: 'Configuration' },
	{ id: 'gd5', icon: '🚀', text: 'Deployment Guide' },
];

const pinnedItems = [
	{ id: 'p1', icon: '⭐', text: 'Authentication flow' },
	{ id: 'p2', icon: '⭐', text: 'Database config' },
	{ id: 'p3', icon: '⭐', text: 'Error handling' },
	{ id: 'p4', icon: '⭐', text: 'Rate limiting' },
];

const smartSuggestions = [
	{ id: 's1', text: 'Rewrite clearer' },
	{ id: 's2', text: 'Add code example' },
	{ id: 's3', text: 'Summarize section' },
	{ id: 's4', text: 'Expand details' },
	{ id: 's5', text: 'Fix style issues' },
];


const Sidebar: React.FC = () => {
	const [isExpanded, setIsExpanded] = useState(true);

	const toggleSidebar = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<aside className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}>
			{isExpanded ? (
				<>
					<div className="sidebar-header">
						<div className="sidebar-logo">
							<span className="logo-icon">📚</span>
							<span className="logo-text">FixDocs</span>
						</div>
						<button 
							className="sidebar-collapse" 
							onClick={toggleSidebar}
							title="Collapse sidebar"
						>
							<img src="/sidebar.png" alt="Collapse" className="collapse-icon" />
						</button>
					</div>
					<div className="sidebar-content">
						<section>
							<h4>Generated Docs</h4>
							<ul>
								{generatedSections.map((s) => (
									<li key={s.id}>{s.icon} {s.text}</li>
								))}
							</ul>
						</section>

						<section>
							<h4>Pinned</h4>
							<ul>
								{pinnedItems.map((p) => (
									<li key={p.id}>{p.icon} {p.text}</li>
								))}
							</ul>
						</section>

						<section>
							<h4>Smart Suggestions</h4>
							<ul>
								{smartSuggestions.map((s) => (
									<li key={s.id}>💡 {s.text}</li>
								))}
							</ul>
						</section>

						<section className="export">
							<button className="btn btn-ghost">Commit to GitHub</button>
						</section>
					</div>
				</>
			) : (
				<button 
					className="sidebar-expand" 
					onClick={toggleSidebar}
					title="Expand sidebar"
				>
					<span className="logo-icon">📚</span>
				</button>
			)}
		</aside>
	);
};

export default Sidebar;



