import { useContext } from "react";
import { createContext } from "react";

export const StateContext = createContext(null);

export function useStateContext() {
  const context = useContext(StateContext);

  if (!context) {
    throw new Error('"useStateContext" must be used within a ContextProvider');
  }

  return context;
}
