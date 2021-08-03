import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import FindingTimeLineChart from "../Charts/FindingTimeLineChart";
import ChipList from "../ChipList/FindingsChipList";
import Modal from "../../Modal/component";
import removeHTML from "../../../utils/removeHTML";
import AccordianSection from "../../Accordians/AccordianSection";
import { makeStyles } from "@material-ui/core";

const FindingTypeAndSubType = ({ findingType, findingSubType }) => {
  return (
    <div>
      {findingType && <Typography>Finding Type: {findingType}</Typography>}
      {findingSubType && (
        <Typography>Finding Sub Type: {findingSubType}</Typography>
      )}
    </div>
  );
};

const FindingHierarchy = ({ busUnit, orgUnit }) => {
  return (
    <div>
      {orgUnit && <Typography>Organization Unit: {orgUnit}</Typography>}
      {busUnit && <Typography>Business Unit: {busUnit}</Typography>}
    </div>
  );
};

const ContactNameAndEmail = ({ name, email }) => {
  return (
    <div>
      {name && <Typography>Name: {name}</Typography>}
      {email && <Typography>Email: {email}</Typography>}
    </div>
  );
};

const FindingAccordianHeaderText = ({ text }) => {
  return <Typography>{removeHTML(text)}</Typography>;
};

const useStyles = makeStyles((theme) => {
  return {
    cardActions: {
      display: "flex",
      justifyContent: "flex-end ",
      flexWrap: "wrap",
    },
  };
});

const RecordCard = ({ record }) => {
  const classes = useStyles();
  return (
    <Card raised>
      <ChipList
        dueDate={record["Due Date"]}
        riskLevel={record["Inherent Risk Level Text"]}
      />
      <CardHeader title={record["Content ID"]} />
      <AccordianSection
        Summary={() => <FindingAccordianHeaderText text="Finding Summary" />}
        Details={() => <FindingAccordianHeaderText text={record["Finding"]} />}
      />
      <AccordianSection
        Summary={() => <FindingAccordianHeaderText text={record["Finding"]} />}
        Details={() => (
          <FindingTypeAndSubType
            findingType={record["Finding Type Text"]}
            findingSubType={record["Finding Sub Type Text"]}
          />
        )}
      />
      <AccordianSection
        Summary={() => <FindingAccordianHeaderText text="Hierarchy" />}
        Details={() => (
          <FindingHierarchy
            orgUnit={record["Organization Unit"]}
            busUnit={record["Business Unit"]}
          />
        )}
      />
      <AccordianSection
        Summary={() => <FindingAccordianHeaderText text="Issue Owner" />}
        Details={() => (
          <ContactNameAndEmail
            name={record["Issue Owner Name Text"]}
            email={record["Issue Owner Email Text"]}
          />
        )}
      />
      <AccordianSection
        Summary={() => <FindingAccordianHeaderText text="L5 Manager" />}
        Details={() => (
          <ContactNameAndEmail
            name={record["L5 Manager Name Text"]}
            email={record["L5 Manager Email Text"]}
          />
        )}
      />
      <CardActions className={classes.cardActions}>
        <Modal title="More Detials">
          <FindingTimeLineChart />
        </Modal>
        <Button variant="outlined" color="primary">
          To Archer
        </Button>
      </CardActions>
    </Card>
  );
};

export default RecordCard;
