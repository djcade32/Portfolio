import { createContext, useState, useContext } from "react";

const AppContext = createContext({});

const AppContextProvider = (props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <AppContext.Provider
      value={{
        showMobileMenu,
        setShowMobileMenu,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

export const useAppContext = () => useContext(AppContext);
