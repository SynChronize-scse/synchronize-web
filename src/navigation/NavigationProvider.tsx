import { useNavigate } from 'react-router-dom'
import { NavigationContext } from './NavigationContext'


export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <NavigationContext.Provider value={{ goto: navigate, goBack }}>
      {children}
    </NavigationContext.Provider>
  );
};