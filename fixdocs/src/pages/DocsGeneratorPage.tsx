import React from 'react';

const DocsGeneratorPage: React.FC = () => {
	return (
		<div className="docs-generator-layout">
			<section className="panel upload-section">
				<h3>Upload Repo / Files</h3>
				<div className="upload">
					<input type="file" multiple />
					<span className="file-status">📁 3 files selected: auth.js, api.js, utils.js</span>
					<div className="github-status">
						<span className="status-indicator connected">🟢</span>
						<span className="status-text">Connected to: github.com/username/my-project</span>
					</div>
					<button className="btn">Connect GitHub</button>
				</div>
				<div className="suggestions">
					<h4>AI Suggestions</h4>
					<div className="chips">
						<button className="chip">Rewrite clearer</button>
						<button className="chip">Add code example</button>
						<button className="chip">Summarize section</button>
						<button className="chip">Expand details</button>
						<button className="chip">Fix style issues</button>
					</div>
				</div>
			</section>

			<section className="panel preview-section">
				<h3>Generated Documentation Preview</h3>
				<div className="markdown-preview">
					<pre>
{`# ANPR System Documentation

## API Reference

### Base URL
\`https://api.your-anpr-system.com/v1\`

### Authentication
All API requests require an API key sent in the header.

\`\`\`bash
curl -H "X-API-Key: YOUR_API_KEY" https://api.your-anpr-system.com/v1/...
\`\`\`

## Endpoints

### 1. Process Image
Process a single image for number plate recognition.

**Endpoint:** \`POST /process\`
**Content-Type:** \`multipart/form-data\`

**Body Parameters:**
- \`image\` (required, file): The image file, supporting formats JPG, PNG, and WebP
- \`country_code\` (optional, string): An ISO country code (e.g., 'GB', 'US') to improve accuracy
- \`mode\` (optional, string): Can be either \`fast\` or \`accurate\`. It defaults to \`accurate\`

**Success Response (200):**
\`\`\`json
{
  "success": true,
  "results": [
    {
      "plate": "ABC123",
      "confidence": 0.95,
      "bbox": [100, 200, 300, 250]
    }
  ]
}
\`\`\`

### 2. Process Video Stream
Open a WebSocket connection for real-time processing of a video stream.

**Endpoint:** \`wss://api.your-anpr-system.com/v1/stream\`

**Query Parameters:**
- \`api_key\` (required, string): Your API key
- \`max_fps\` (optional, integer): Max frames per second to process

**Messages:**
- **Client -> Server:** Binary video frame data
- **Server -> Client:** JSON result object for each processed frame (same format as \`/process\` endpoint)

## Setup / Installation

### Prerequisites
- Python 3.8 or higher
- pip (Python package manager)

### Installation via pip
The recommended way to install the ANPR client library.

\`\`\`bash
pip install anpr-client
\`\`\`

## User Guide

### Basic Usage: Processing a Single Image

\`\`\`python
from anpr_client import ANPRClient

# Initialize the client
client = ANPRClient(api_key="your_api_key_here")

# Process an image file
result = client.process_image(
    image_path="car.jpg",
    country_code="GB",
    mode="accurate"
)

# Handle the results
if result['results']:
    detection = result['results'][0]
    print(f"Detected Plate: {detection['plate']}")
    print(f"Confidence: {detection['confidence']:.2f}")
else:
    print("No license plates detected.")
\`\`\`

## Deployment Guide

### Option 1: Cloud API (Recommended)
The simplest way to get started. Your application makes HTTP requests to our managed cloud service.

1. Sign up for an account on our portal.
2. Obtain your \`API_KEY\` from the dashboard.
3. Integrate the client library into your application.
4. Your application is now ready to use ANPR.

### Hardware Recommendations

**Cloud API:**
- Any standard setup.

**On-Premise:**
- **CPU:** Modern multi-core x86-64 CPU (e.g., Intel i7 or Xeon equivalent).
- **GPU:** Recommended: NVIDIA GPU (RTX 3080, A10G, A100) with CUDA support for a significant performance boost (>10x faster).
- **RAM:** Minimum 8GB, 16GB recommended.
- **Storage:** 10GB for the OS and application, plus space for logs and cached models.`}
					</pre>
				</div>
				<div className="actions">
					<button className="btn">Download .md</button>
					<button className="btn btn-ghost">Download .pdf</button>
				</div>
			</section>
		</div>
	);
};

export default DocsGeneratorPage;



