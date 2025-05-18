import { createContext, useState } from "react";

export const NadraTokenContext = createContext({
  user: [],
  login: () => {},
  logOut: () => {},
});

function ContextProvider({ children }) {
  const [user, setUser] = useState();

  const login = (loginUser) => {
    setUser(loginUser);
  };

  const logOut = () => {};
  return (
    <NadraTokenContext.Provider value={{ user, login, logOut }}>
      {children}
    </NadraTokenContext.Provider>
  );
}

export default ContextProvider;
