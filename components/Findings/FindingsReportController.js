import FindingsFilterList from "./FindingsFilterList";

const FindingsReportController = () => {
  return (
    <FindingsFilterList
      filterParam="Stage Stauts"
      options={[
        "Stage 01 - Submit Record",
        "Stage 02 - Review Record",
        "Stage 03 - Accept Record",
        "Stage 04 - Accept Record",
      ]}
    />
  );
};

export default FindingsReportController;
