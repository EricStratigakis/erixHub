import { Accordion, AccordionDetails } from "@material-ui/core";
import MyAccordionSummary from "../../erix-ui/Accordions/MyAccordionSummary";
import {
  FindingAccordianHeaderText,
  FindingTypeAndSubType,
  FindingHierarchy,
  ContactNameAndEmail,
  FindingApprovalText,
} from "../Feilds/Typographies";

const FindingSummarySection = ({ record }) => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccordianHeaderText text="Fidning Summary" />
      </MyAccordionSummary>
      <AccordionDetails>
        <FindingAccordianHeaderText text={record["Finding"]} />
      </AccordionDetails>
    </Accordion>
  );
};

const FindingTypeSection = ({ record }) => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccordianHeaderText text="Finding Type" />
      </MyAccordionSummary>
      <AccordionDetails>
        <FindingTypeAndSubType
          findingType={record["Finding Type Text"]}
          findingSubType={record["Finding Sub Type Text"]}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const FindingHierarchySection = ({ record }) => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccordianHeaderText text="Hierarchy" />
      </MyAccordionSummary>
      <AccordionDetails>
        <FindingHierarchy
          orgUnit={record["Organization Unit"]}
          busUnit={record["Business Unit"]}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const FindingIssueOwnerSection = ({ record }) => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccordianHeaderText text="Issue Owner" />
      </MyAccordionSummary>
      <AccordionDetails>
        <ContactNameAndEmail
          name={record["Issue Owner Name Text"]}
          email={record["Issue Owner Email Text"]}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const FindingLFiveManager = ({ record }) => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccordianHeaderText text="L5 Manager" />
      </MyAccordionSummary>
      <AccordionDetails>
        <ContactNameAndEmail
          name={record["L5 Manager Name Text"]}
          email={record["L5 Manager Email Text"]}
        />
      </AccordionDetails>
    </Accordion>
  );
};

const FindingApproverSection = ({ record, approverNumber }) => {
  return (
    <Accordion>
      <MyAccordionSummary>
        <FindingAccordianHeaderText text={`Approver ${approverNumber}`} />
      </MyAccordionSummary>
      <AccordionDetails>
        <ContactNameAndEmail
          name={record[`Approver ${approverNumber} Name Text`]}
          email={record[`Approver ${approverNumber} Email Text`]}
        />
        <div>
          <FindingApprovalText
            date={record[`Approver ${approverNumber} Date`]}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

const RecordCardBody = ({ record }) => {
  return (
    <>
      <FindingSummarySection record={record} />
      <FindingTypeSection record={record} />
      <FindingHierarchySection record={record} />
      <FindingIssueOwnerSection record={record} />
      <FindingLFiveManager record={record} />
      <FindingApproverSection record={record} />
    </>
  );
};

export default RecordCardBody;
