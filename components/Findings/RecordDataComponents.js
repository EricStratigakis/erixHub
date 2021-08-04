import AccordianSection from "../Accordians/AccordianSection";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ScheduleSharpIcon from "@material-ui/icons/ScheduleSharp";
import ErrorOutlineOutlinedIcon from "@material-ui/icons/ErrorOutlineOutlined";
import { makeStyles } from "@material-ui/core";
import {
  FindingTypeAndSubType,
  FindingHierarchy,
  ContactNameAndEmail,
  FindingAccordianHeaderText,
} from "./FindingsTypography";
import { red } from "@material-ui/core/colors";
import MyModal from "../Modal/MyModal";
import TimeLineChart from "../Charts/TimeLineChart";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: "flex",
      justifyContent: "flex-end",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
  };
});
const FindingSummarySection = ({ record }) => {
  return (
    <AccordianSection
      MySummary={() => <FindingAccordianHeaderText text="Finding Summary" />}
      MyDetails={() => <FindingAccordianHeaderText text={record["Finding"]} />}
    />
  );
};
const FindingTypeSection = ({ record }) => {
  return (
    <AccordianSection
      MySummary={() => <FindingAccordianHeaderText text={record["Finding"]} />}
      MyDetails={() => (
        <FindingTypeAndSubType
          findingType={record["Finding Type Text"]}
          findingSubType={record["Finding Sub Type Text"]}
        />
      )}
    />
  );
};
const FindingHierarchySection = ({ record }) => {
  return (
    <AccordianSection
      MySummary={() => <FindingAccordianHeaderText text="Hierarchy" />}
      MyDetails={() => (
        <FindingHierarchy
          orgUnit={record["Organization Unit"]}
          busUnit={record["Business Unit"]}
        />
      )}
    />
  );
};
const FindingIssueOwnerSection = ({ record }) => {
  return (
    <AccordianSection
      MySummary={() => <FindingAccordianHeaderText text="Issue Owner" />}
      MyDetails={() => (
        <ContactNameAndEmail
          name={record["Issue Owner Name Text"]}
          email={record["Issue Owner Email Text"]}
        />
      )}
    />
  );
};
const FindingLFiveManagerSection = ({ record }) => {
  return (
    <AccordianSection
      MySummary={() => <FindingAccordianHeaderText text="L5 Manager" />}
      MyDetails={() => (
        <ContactNameAndEmail
          name={record["L5 Manager Name Text"]}
          email={record["L5 Manager Email Text"]}
        />
      )}
    />
  );
};

export const FindingsRecordCardBody = ({ record }) => {
  return (
    <>
      <FindingSummarySection record={record} />
      <FindingTypeSection record={record} />
      <FindingHierarchySection record={record} />
      <FindingIssueOwnerSection record={record} />
      <FindingLFiveManagerSection record={record} />
    </>
  );
};
export const FindingsChipList = ({ record }) => {
  const classes = useStyles();
  const dueData = record["Due Date"];
  const riskLevel = record["Inherent Risk Level Text"];
  const overDue = new Date(dueData) < new Date();
  return (
    <div className={classes.root}>
      {overDue && (
        <Chip
          variant="outlined"
          size="small"
          icon={<ScheduleSharpIcon />}
          label="Overdue"
          clickable
          color="primary"
          style={{ color: red[500], borderColor: red[500] }}
        />
      )}
      {riskLevel === "High" && (
        <Chip
          variant="outlined"
          size="small"
          icon={<ErrorOutlineOutlinedIcon />}
          label="High Risk"
          clickable
          color="primary"
          style={{ color: red[500], borderColor: red[500] }}
        />
      )}
      {riskLevel === "Very High" && (
        <Chip
          variant="outlined"
          size="small"
          icon={<ErrorOutlineOutlinedIcon />}
          label="Very High Risk"
          clickable
          color="primary"
          style={{ color: red[500], borderColor: red[500] }}
        />
      )}
    </div>
  );
};
export const FindingsRecrodCardActions = ({ record }) => {
  return (
    <>
      <MyModal title="More Detials">
        <TimeLineChart />
      </MyModal>
      <Button variant="outlined" color="primary">
        To Archer
      </Button>
    </>
  );
};
