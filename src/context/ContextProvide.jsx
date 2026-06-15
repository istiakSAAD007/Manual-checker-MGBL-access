import { useState } from "react";
import { StateContext } from "./useStateContext";

function ContextProvide({ children }) {
  const [state, setState] = useState(null);

  const value = { state };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

export default ContextProvide;
