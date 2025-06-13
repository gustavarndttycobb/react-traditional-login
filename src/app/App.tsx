import BaseLayout from "../shared/components/BaseLayout/BaseLayout";
import Header from "../shared/components/Header/Header";
import { ThemeProviderCustom } from "../shared/contexts/ThemeContext";
import AppRoutes from "./routes";
import '../i18n/config';
import { AuthProvider } from "../features/Auth/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProviderCustom>
        <Header />
        <BaseLayout>
          <AppRoutes />
        </BaseLayout>
      </ThemeProviderCustom>
    </AuthProvider>
  );
}

export default App;
