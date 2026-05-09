import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app/styles/global.css";
import { LanguageProvider } from "@/shared/lib/LanguageContext";
import App from "./app/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);
