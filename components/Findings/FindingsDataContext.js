import { useState, createContext, useContext } from "react";

const findingsData = [
  {
    "Content ID": 123456789,
    "Stage Status Text": "Stage 01 - Submit Record",
    "Inherent Risk Level Text": "High",
    Finding: "This Finding is very important",
    "Due Date": "2021-04-12T00:00:00",
    "L5 Manager Name Text": "Eric Strat",
    "L5 Manager Email Text": "ericstrat@mail.com",
    "Issue Owner Name Text": "Pete Strat",
    "Issue Owner Email Text": "peterstrat@mail.com",
    "Business Unit": "Archer - IT",
    "Organization Unit": "T&0",
    "Finding Type Text": "Self Declared",
    "Finding Sub Type Text": "test",
    "Risk Treatment Type Text": "Acceptance",
  },
  {
    "Content ID": 123456789,
    "Stage Status Text": "Stage 02 - Review Record",
    "Inherent Risk Level Text": "High",
    Finding: "This is an example of an <p>Finding</p>",
    "Due Date": "2021-04-12T00:00:00",
    "L5 Manager Name Text": "Eric Strat",
    "L5 Manager Email Text": "ericstrat@mail.com",
    "Issue Owner Name Text": "Pete Strat",
    "Issue Owner Email Text": "peterstrat@mail.com",
    "Business Unit": "Archer - IT",
    "Organization Unit": "T&0",
    "Finding Type Text": "Self Declared",
    "Finding Sub Type Text": "test",
    "Risk Treatment Type Text": "Acceptance",
  },
  {
    "Content ID": 123456789,
    "Stage Status Text": "Stage 01 - Submit Record",
    "Inherent Risk Level Text": "Very High",
    Finding: "This is the title of a finding",
    "Due Date": "2021-04-12T00:00:00",
    "L5 Manager Name Text": "Eric Strat",
    "L5 Manager Email Text": "ericstrat@mail.com",
    "Issue Owner Name Text": "Pete Strat",
    "Issue Owner Email Text": "peterstrat@mail.com",
    "Business Unit": "Archer - IT",
    "Organization Unit": "T&0",
    "Finding Type Text": "Self Declared",
    "Finding Sub Type Text": "test",
    "Risk Treatment Type Text": "Acceptance",
  },
  {
    "Content ID": 123456789,
    "Stage Status Text": "Stage 01 - Submit Record",
    "Inherent Risk Level Text": "High",
    Finding: "This is the title of a finding",
    "Due Date": "2021-04-12T00:00:00",
    "L5 Manager Name Text": "Eric Strat",
    "L5 Manager Email Text": "ericstrat@mail.com",
    "Issue Owner Name Text": "Pete Strat",
    "Issue Owner Email Text": "peterstrat@mail.com",
    "Business Unit": "Archer - IT",
    "Organization Unit": "T&0",
    "Finding Type Text": "Self Declared",
    "Finding Sub Type Text": "test",
    "Risk Treatment Type Text": "Acceptance",
  },
  {
    "Content ID": 123456789,
    "Stage Status Text": "Stage 01 - Submit Record",
    "Inherent Risk Level Text": "Low",
    Finding: "This is the title of a finding",
    "Due Date": "2021-04-12T00:00:00",
    "L5 Manager Name Text": "Eric Strat",
    "L5 Manager Email Text": "ericstrat@mail.com",
    "Issue Owner Name Text": "Pete Strat",
    "Issue Owner Email Text": "peterstrat@mail.com",
    "Business Unit": "Archer - IT",
    "Organization Unit": "T&0",
    "Finding Type Text": "Self Declared",
    "Finding Sub Type Text": "test",
    "Risk Treatment Type Text": "Remediation",
  },
  {
    "Content ID": 123456789,
    "Stage Status Text": "Stage 01 - Submit Record",
    "Inherent Risk Level Text": "Medium",
    Finding: "This is the title of a finding",
    "Due Date": "2021-04-12T00:00:00",
    "L5 Manager Name Text": "Eric Strat",
    "L5 Manager Email Text": "ericstrat@mail.com",
    "Issue Owner Name Text": "Pete Strat",
    "Issue Owner Email Text": "peterstrat@mail.com",
    "Business Unit": "Archer - IT",
    "Organization Unit": "T&0",
    "Finding Type Text": "Self Declared",
    "Finding Sub Type Text": "test",
    "Risk Treatment Type Text": "Remediation",
  },
  {
    "Content ID": 123456789,
    "Stage Status Text": "Stage 01 - Submit Record",
    "Inherent Risk Level Text": "High",
    Finding: "This is the title of a finding",
    "Due Date": "2021-04-12T00:00:00",
    "L5 Manager Name Text": "Eric Strat",
    "L5 Manager Email Text": "ericstrat@mail.com",
    "Issue Owner Name Text": "Pete Strat",
    "Issue Owner Email Text": "peterstrat@mail.com",
    "Business Unit": "Archer - IT",
    "Organization Unit": "T&0",
    "Finding Type Text": "Self Declared",
    "Finding Sub Type Text": "test",
    "Risk Treatment Type Text": "Remediation",
  },
];

const initalFilterOptions = {
  "Stage Status Text": {
    "Stage 01 - Submit Record": true,
    "Stage 02 - Review Record": true,
    "Stage 03 - Accept Record": true,
  },
  "Inherent Risk Level Text": {
    Low: true,
    Medium: true,
    High: true,
    "Very Hight": true,
  },
};
export const FindingsDataContext = createContext();

export function useFindingsData() {
  return useContext(FindingsDataContext);
}

export const FindingsDataContextProvider = ({ children }) => {
  const mainData = findingsData;
  const [data, setData] = useState(mainData);
  const [filterOptions, setFilterOptions] = useState(initalFilterOptions);

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
    setData(fitlerData());
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
