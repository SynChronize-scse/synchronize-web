import { BrowserRouter as Router } from "react-router-dom";
import { NavigationProvider } from "./NavigationProvider";
import { AppRoutes } from "./Routes";
import Footer from "$lib/components/Footer";

export const Navigation = () => {
  return (
    <Router>
      <NavigationProvider>
        <AppRoutes />
        <Footer />
      </NavigationProvider>
    </Router>
  );
};
