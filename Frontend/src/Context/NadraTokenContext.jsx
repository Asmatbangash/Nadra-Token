import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NadraTokenContext = createContext({
  user: [],
  login: () => {},
  logOut: () => {},
  getCurrentUser: () => {},
});

function ContextProvider({ children }) {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/current-user",
          { withCredentials: true } // Include this if your route requires cookies
        );
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.error("There was an error fetching the current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <NadraTokenContext.Provider value={{ user }}>
      {children}
    </NadraTokenContext.Provider>
  );
}

export default ContextProvider;
