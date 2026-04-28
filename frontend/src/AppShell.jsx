import { useLocation } from "react-router-dom";
import App from "./App.jsx";
import Footer from "./components/layout/Footer.jsx";

function AppShell() {
  const { pathname } = useLocation();
  const hideFooterRoutes = ["/login", "/register", "/form", "/reset"];
  const shouldHideFooter = hideFooterRoutes.includes(pathname);

  return (
    <>
      <div className="container mx-auto px-4">
        <App />
      </div>
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default AppShell;
