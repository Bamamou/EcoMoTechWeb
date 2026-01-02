import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Clarity from '@microsoft/clarity'

// Initialize Microsoft Clarity
const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID || 'rh9t9s5pf8'
if (clarityProjectId) {
  Clarity.init(clarityProjectId)
  Clarity.consent()
}

createRoot(document.getElementById("root")!).render(<App />);
