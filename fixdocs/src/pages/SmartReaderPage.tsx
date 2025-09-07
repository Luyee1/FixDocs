import React, { useState } from 'react';

type Message = {
	id: string;
	role: 'user' | 'assistant';
	content: React.ReactNode;
};

const SmartReaderPage: React.FC = () => {
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState<Message[]>([
		{
			id: 'demo-1',
			role: 'user',
			content: 'What does this project aims to develop?'
		},
		{
			id: 'demo-2',
			role: 'assistant',
			content: (
				<div>
					<div className="label">Answer</div>
					<p><strong>Q:</strong> What does this project aims to develop?</p>
					<p><strong>A:</strong> The project aims to create an ANPR system that monitoring and have access control.</p>
					<p className="source">Source: <span>docs/project-overview.md</span></p>
					<div className="followups">
						<button className="btn btn-ghost" onClick={() => onVisualize()}>Show flow diagram?</button>
					</div>
				</div>
			)
		}
	]);

	function addMessage(role: 'user' | 'assistant', content: React.ReactNode) {
		setMessages((prev) => [...prev, { id: crypto.randomUUID(), role, content }]);
	}

	function onAsk() {
		if (!input.trim()) return;
		const q = input.trim();
		setInput('');
		addMessage('user', q);
		addMessage(
			'assistant',
			<div>
				<div className="label">Answer</div>
				<p><strong>Q:</strong> {q}</p>
				<p><strong>A:</strong> Use the <code>/auth/login</code> endpoint with JWT token.</p>
				<p className="source">Source: <span>api/auth.md</span></p>
				<div className="followups">
					<button className="btn btn-ghost" onClick={() => onVisualize()}>Show flow diagram?</button>
				</div>
			</div>
		);
	}


	function onVisualize() {
		addMessage(
			'assistant',
			<div>
				<div className="label">Flow Diagram</div>
				<pre className="diagram" style={{fontFamily: 'monospace', fontSize: '14px', lineHeight: '1.6', marginTop: '12px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', border: '1px solid #e9ecef'}}>
{`[Camera Capture] 
        ↓
 [Image Pre-processing] 
        ↓
 [License Plate Detection] 
        ↓
 [Character Segmentation] 
        ↓
 [OCR - Character Recognition] 
        ↓
 [Post Processing / Validation] 
        ↓
 [Database + Actions]`}
				</pre>
			</div>
		);
	}

	return (
		<div className="smart-reader-layout">
			<div className="chat-container">
				<div className="chat-messages">
					{messages.map((m) => (
						<div key={m.id} className={`msg ${m.role}`}>
							<div className="bubble">{m.content}</div>
						</div>
					))}
				</div>
			</div>
			
			<div className="chat-input-container">
				<div className="chat-input">
					<input
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="Ask your docs..."
						onKeyPress={(e) => e.key === 'Enter' && onAsk()}
					/>
					<button className="btn" onClick={onAsk} disabled={!input.trim()}>
						Ask
					</button>
				</div>
			</div>
		</div>
	);
};

export default SmartReaderPage;



