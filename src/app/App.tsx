import BaseLayout from "../shared/components/BaseLayout/BaseLayout";
import Header from "../shared/components/Header/Header";
import { ThemeProviderCustom } from "../shared/contexts/ThemeContext";
import AppRoutes from "./routes";
import '../i18n/config';

function App() {
  return (
    <ThemeProviderCustom>
      <BaseLayout>
        <Header />
        <AppRoutes />
      </BaseLayout>
    </ThemeProviderCustom>

  );
}

export default App;
