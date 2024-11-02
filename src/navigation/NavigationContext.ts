import { createContext, useContext } from "react";
import { NavigateOptions } from "react-router-dom";

interface NavigationContextProps {
  goto: (path: string, options?: NavigateOptions) => void;
  goBack: () => void;
}

export const NavigationContext = createContext<
  NavigationContextProps | undefined
>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
