import { BrowserRouter as Router } from "react-router-dom"
import { NavigationProvider } from "./NavigationProvider"
import { AppRoutes } from "./Routes"

export const Navigation = () => {
  return (
    <Router>
      <NavigationProvider>
        <AppRoutes />
      </NavigationProvider>
    </Router>
  )
}