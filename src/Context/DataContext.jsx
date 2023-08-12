/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext, useContext } from "react";
import { appInitialState, appReducer } from "../Reducer/appReducer";

const DataContext = createContext();

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, appInitialState);

  const departments = state.inventory.reduce((acc, value) => {
    return acc.includes(value.department) ? acc : [...acc, value.department];
  }, []);

  useEffect(() => {
    localStorage.setItem("inventory", JSON.stringify(state.inventory));
  }, [state.inventory]);

  return (
    <DataContext.Provider value={{ state, dispatch, departments }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
