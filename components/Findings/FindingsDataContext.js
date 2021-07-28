import { useState, createContext, useContext } from "react";
import findingsData from "../../data/findings.json"; // reaplce with API call in PROD

export const FindingsDataContext = createContext();

export function useFindingsData() {
  return useContext(FindingsDataContext);
}

export const FindingsDataContextProvider = ({ children }) => {
  const mainData = findingsData;
  const [data, setData] = useState(mainData);
  return (
    <FindingsDataContext.Provider value={{ data, mainData, setData }}>
      {children}
    </FindingsDataContext.Provider>
  );
};
