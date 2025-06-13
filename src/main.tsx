import { StrictMode } from "react";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import App from "./app/App";
import { EnvironmentProvider } from "./shared/contexts/EnvironmentContext";
import ReactDOM from "react-dom/client";

async function deferRender() {
  const { worker } = await import('./mocks/browser')
  return worker.start()
}

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <EnvironmentProvider>
        <App />
      </EnvironmentProvider>
    </StrictMode>
  );
})
