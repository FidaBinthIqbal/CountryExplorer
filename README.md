
🌍 Country Explorer

🚀 Project Overview

Country Explorer is a responsive web application built using Next.js App Router that allows users to explore countries from around the world.

Users can:
	•	Browse a list of countries with flags and basic details
	•	Search countries by name
	•	View detailed information on a dedicated country page
	•	Toggle between light and dark themes

This project focuses on clean architecture, server/client separation, and API integration using modern Next.js practices.

⸻

✨ Features Implemented
	•	✅ Fetch and display country data from REST Countries API
	•	✅ Search functionality to filter countries by name
	•	✅ Dynamic routing for individual country pages (/country/[code])
	•	✅ Optimized images using next/image
	•	✅ Responsive layout for all screen sizes
	•	✅ Basic light/dark theme toggle
	•	✅ Graceful error handling for missing or invalid country data

⸻

🛠 Tech Stack & Libraries
	•	Framework: Next.js 16.1.1 (App Router)
	•	Frontend: React 19
	•	State Management: Zustand (for theme state)
	•	Styling: CSS + minimal Tailwind utility classes
	•	API: REST Countries API
	•	Routing: Dynamic routes with App Router

⸻

⚙️ Setup & Installation

1️⃣ Clone the repository

git clone https://github.com/FidaBinthIqbal/country-explorer.git
cd country-explorer

2️⃣ Install dependencies

npm install

If you encounter dependency conflicts:

    npm install --legacy-peer-deps

3️⃣ Run the development server

npm run dev

4️⃣ Open in browser

http://localhost:3000


⸻

🏗 Approach & Architectural Decisions
	•	App Router: Used Next.js App Router for better routing and data handling.
	•	Server Components: Country data is fetched server-side where possible to improve performance.
	•	Client Components: Search and theme toggling are handled using client-side state.
	•	Separation of Concerns:
	•	API logic → src/lib/api.ts
	•	Types → src/types/
	•	UI components → src/components/
	•	Dynamic Routing: Country detail pages are generated using [code] route parameters.

⸻

⚠️ Challenges Faced & Solutions

1. Next.js App Router params
	•	Issue: params behaving differently in async components.
	•	Solution: Properly handled route params and avoided async client components.

2. Image host errors
	•	Issue: next/image blocked external flag URLs.
	•	Solution: Added required hostnames in next.config.js.

3. Theme toggle complexity
	•	Issue: Tailwind dark mode setup became unstable.
	•	Solution: Implemented a basic CSS-based theme toggle using Zustand.

⸻

⚠️ Assumptions & Areas for Improvement

Assumptions
	•	REST Countries API is always available.
	•	Only essential country data is required.

Improvements
	•	Persist theme preference using localStorage
	•	Improve dark mode consistency across all pages
	•	Add more country details (languages, currencies, borders)
	•	Implement pagination or infinite scrolling
	•	Improve accessibility and keyboard navigation

⸻

📌 Notes

Theme Toggle Disclaimer:
The dark/light mode toggle is implemented using CSS and Zustand, but it is not a fully polished solution. Some UI elements may not reflect the theme consistently. This was done intentionally to focus on core functionality and architecture.

⸻