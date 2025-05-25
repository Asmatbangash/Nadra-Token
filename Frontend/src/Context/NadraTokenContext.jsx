import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const NadraTokenContext = createContext({
  user: [],
  role: [],
  currentUserTokens: [],
  allToken: [],
});

function ContextProvider({ children }) {
  const [user, setUser] = useState();
  const [role, setRole] = useState();
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/user/current-user",
          { withCredentials: true } // Include this if your route requires cookies
        );
        setUser(response.data?.data);
        setRole(response.data?.data?.role);
      } catch (error) {
        console.error("There was an error fetching the current user:", error);
      }
    };

    fetchCurrentUser();
  }, []);

  const [currentUserTokens, setCurrentUserTokens] = useState([]);
  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/token/get-tokens",
          { withCredentials: true } // Include this if your route requires cookies
        );
        setCurrentUserTokens(response.data?.data);
      } catch (error) {
        console.error("There was an error fetching the current user:", error);
      }
    };
    fetchTokens();
  }, []);

  const [allToken, setAllToken] = useState([]);
  useEffect(() => {
    const fetchAllTokens = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/token/get-all-token"
          //     { withCredentials: true } // Include this if your route requires cookies
        );
        setAllToken(response.data?.data);
      } catch (error) {
        console.error("There was an error fetching all token:", error);
      }
    };
    fetchAllTokens();
  }, []);

  return (
    <NadraTokenContext.Provider
      value={{ user, currentUserTokens, allToken, role }}
    >
      {children}
    </NadraTokenContext.Provider>
  );
}

export default ContextProvider;
