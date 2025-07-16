# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

# Job Assignment Video Prep

This project is a web application designed to help users generate video scripts for job assignments using Google Gemini AI. It consists of a Flask backend and a React frontend powered by Vite.

## Features
- Generate video scripts based on applicant notes and context
- Uses Google Gemini AI for script generation
- Simple and modern UI built with React and TypeScript
- CORS enabled for local development

## Project Structure
```
├── app.py                  # Flask backend API
├── App.tsx                 # Main React component
├── constants.ts            # App constants
├── index.html              # HTML entry point
├── index.tsx               # React app entry point
├── metadata.json           # Metadata for the project
├── package.json            # NPM dependencies and scripts
├── README.md               # Project documentation
├── tsconfig.json           # TypeScript configuration
├── types.ts                # TypeScript types
├── vite.config.ts          # Vite configuration
├── components/             # React components
│   ├── Header.tsx
│   ├── PrepSection.tsx
│   └── icons/
│       ├── CheckIcon.tsx
│       ├── CopyIcon.tsx
│       └── SpinnerIcon.tsx
├── services/
│   └── geminiService.ts    # Service for Gemini API calls
```

## Backend (Flask)
- Located in `app.py`
- Exposes `/generate-script` POST endpoint
- Accepts `promptContext` and `userInput` in JSON body
- Uses Google Gemini API to generate script content
- Returns generated script as JSON

## Frontend (React + Vite)
- Main entry: `index.tsx`, `App.tsx`
- Components for UI: `Header`, `PrepSection`, and icons
- Service layer for API calls: `geminiService.ts`

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- Google Gemini API key

### Backend Setup
1. Install Python dependencies:
   ```cmd
   pip install flask flask-cors python-dotenv google-generativeai
   ```
2. Create a `.env` file and add your Gemini API key:
   ```env
   API_KEY=your_google_gemini_api_key
   ```
3. Run the Flask server:
   ```cmd
   python app.py
   ```

### Frontend Setup
1. Install Node dependencies:
   ```cmd
   npm install
   ```
2. Start the Vite development server:
   ```cmd
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage
- Enter the prompt context and applicant notes in the UI
- Click to generate the video script
- The script is generated using Gemini AI and displayed in the app

## Environment Variables
- `API_KEY`: Your Google Gemini API key (set in `.env`)

## License
This project is for educational/demo purposes only.
