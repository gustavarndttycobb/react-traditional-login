import BaseLayout from "../shared/components/BaseLayout/BaseLayout";
import Header from "../shared/components/Header/Header";
import { ThemeProviderCustom } from "../shared/contexts/ThemeContext";
import AppRoutes from "./routes";
import '../i18n/config';
import { AuthProvider } from "../features/Auth/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <ThemeProviderCustom>
        <BaseLayout>
          <Header />
          <AppRoutes />
        </BaseLayout>
      </ThemeProviderCustom>
    </AuthProvider>
  );
}

export default App;
