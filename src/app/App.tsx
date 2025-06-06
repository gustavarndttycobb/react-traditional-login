import BaseLayout from "../shared/components/BaseLayout/BaseLayout";
import Header from "../shared/components/Header/Header";
import { ThemeProviderCustom } from "../shared/contexts/ThemeContext";
import AppRoutes from "./routes";
import '../i18n/config';
import { EnvironmentProvider } from "../shared/contexts/EnvironmentContext";

function App() {
  return (
    <EnvironmentProvider>
      <ThemeProviderCustom>
        <BaseLayout>
          <Header />
          <AppRoutes />
        </BaseLayout>
      </ThemeProviderCustom>
    </EnvironmentProvider>
  );
}

export default App;
