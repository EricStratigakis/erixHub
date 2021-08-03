import { useState, createContext, useContext } from "react";
import findingsData from "./recordData.json";
import initialFilterOptions from "./initialFilterOptions.json";

export const FindingsDataContext = createContext();

export function useFindingsData() {
  return useContext(FindingsDataContext);
}

export const FindingsDataContextProvider = ({ children }) => {
  const mainData = findingsData;
  const [data, setData] = useState(mainData);
  const [filterOptions, setFilterOptions] = useState(initialFilterOptions);

  const isValidResult = (filterParam, item) => {
    return filterOptions[filterParam][item[filterParam]];
  };

  const fitlerData = (data = mainData, filterOtopns = filterOptions) => {
    return mainData.filter((item) => {
      return (
        isValidResult("Stage Status Text", item) &&
        isValidResult("Inherent Risk Level Text", item)
      );
    });
  };

  const runFilters = () => {
    setData(fitlerData(mainData, filterOptions));
  };
  return (
    <FindingsDataContext.Provider
      value={{
        mainData,
        data,
        setData,
        filterOptions,
        setFilterOptions,
        runFilters,
      }}
    >
      {children}
    </FindingsDataContext.Provider>
  );
};
