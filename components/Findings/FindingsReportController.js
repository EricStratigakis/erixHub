import FindingsFilterList from "./FindingsFilterList";

const FindingsReportController = () => {
  return (
    <div>
      <FindingsFilterList
        filterParam="Stage Stauts"
        options={[
          "Stage 01 - Submit Record",
          "Stage 02 - Review Record",
          "Stage 03 - Accept Record",
        ]}
      />
    </div>
  );
};

export default FindingsReportController;
