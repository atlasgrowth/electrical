import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

const useHashLocation = () => {
  const location = useLocation();
  const base = '/electrical'; // Adjust this base path if needed
  const path = location.pathname.replace(base, '') || '/';
  return [path, (to) => { window.location.href = base + to; }];
};


createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/electrical"> {/* Add basename here */}
    <Routes>
      <Route path="*" element={<App />} /> {/* Assuming App handles routing */}
    </Routes>
  </BrowserRouter>
);