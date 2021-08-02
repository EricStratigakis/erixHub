import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";

import useStyles from "./styles/default";
import FindingTimeLineChart from "./FindingTimeLineChart";
import FindingCardAccordianSection from "./FindingCardAccordianSection";
import FindingsChipList from "./FindingsChipList";
import Modal from "../Modal/component";
import removeHTML from "../../utils/removeHTML";

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

const FindingCard = ({ item }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      <Card raised className={classes.findingCardRoot}>
        <FindingsChipList
          dueDate={item["Due Date"]}
          riskLevel={item["Inherent Risk Level Text"]}
        />
        <CardHeader title={item["Content ID"]} />
        <FindingCardAccordianSection
          Summary={() => <FindingAccordianHeaderText text="Finding Summary" />}
          Details={() => <FindingAccordianHeaderText text={item["Finding"]} />}
        />
        <FindingCardAccordianSection
          Summary={() => <FindingAccordianHeaderText text={item["Finding"]} />}
          Details={() => (
            <FindingTypeAndSubType
              findingType={item["Finding Type Text"]}
              findingSubType={item["Finding Sub Type Text"]}
            />
          )}
        />
        <FindingCardAccordianSection
          Summary={() => <FindingAccordianHeaderText text="Hierarchy" />}
          Details={() => (
            <FindingHierarchy
              orgUnit={item["Organization Unit"]}
              busUnit={item["Business Unit"]}
            />
          )}
        />
        <FindingCardAccordianSection
          Summary={() => <FindingAccordianHeaderText text="Issue Owner" />}
          Details={() => (
            <ContactNameAndEmail
              name={item["Issue Owner Name Text"]}
              email={item["Issue Owner Email Text"]}
            />
          )}
        />
        <FindingCardAccordianSection
          Summary={() => <FindingAccordianHeaderText text="L5 Manager" />}
          Details={() => (
            <ContactNameAndEmail
              name={item["L5 Manager Name Text"]}
              email={item["L5 Manager Email Text"]}
            />
          )}
        />
        <CardActions>
          <Modal title="More Detials">
            <FindingTimeLineChart />
          </Modal>
          <Button variant="outlined" color="primary">
            To Archer
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FindingCard;
