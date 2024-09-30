import { createContext, useContext } from 'react';


interface NavigationContextProps {
  goto: (path: string) => void;
  goBack: () => void;
}

export const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};