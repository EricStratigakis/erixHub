import { Typography } from "@material-ui/core";
import removeHTML from "../../../utils/removeHTML";
import toReadableDate from "../../../utils/toReadableDate";

export const FindingTypeAndSubType = ({ findingType, findingSubType }) => {
  return (
    <div>
      {findingType && <Typography>Finding Type: {findingType}</Typography>}
      {findingSubType && (
        <Typography>Finding Sub Type: {findingSubType}</Typography>
      )}
    </div>
  );
};
export const FindingHierarchy = ({ busUnit, orgUnit }) => {
  return (
    <div>
      {orgUnit && <Typography>Organization Unit: {orgUnit}</Typography>}
      {busUnit && <Typography>Business Unit: {busUnit}</Typography>}
    </div>
  );
};
export const ContactNameAndEmail = ({ name, email }) => {
  return (
    <div>
      {name && <Typography>Name: {name}</Typography>}
      {email && <Typography>Email: {email}</Typography>}
    </div>
  );
};
export const FindingAccordianHeaderText = ({ text }) => {
  return <Typography>{removeHTML(text)}</Typography>;
};
export const FindingApprovalText = ({ date }) => {
  return (
    <Typography>
      {date ? `Approved on ${toReadableDate(date)}` : "Awaiting Approval"}
    </Typography>
  );
};
export const FindingAccorionHeaderText = ({ text }) => {
  return <Typography>{removeHTML(text)}</Typography>;
};
