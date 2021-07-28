import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import dynamic from "next/dynamic";
import FindingTimeLineChart from "./FindingTimeLineChart";
import Modal from "../Modal/component";
import MoreDetails from "./MoreDetails.js";

const useStyles = makeStyles({
  root: {
    width: "100%",
    padding: "2rem",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const FindingCard = ({
  contentId,
  finding,
  lFiveManagerName,
  lFiveManagerEmail,
  issueOwnerName,
  issueOwnerEmail,
  findingType,
  findingSubType,
  riskTreatmentType,
  stageStatus,
  inHerentRiskLevel,
  busUnit,
  orgUnit,
  dueDate,
  closedDate,
  completionDate,
  lastUpdatedDate,
}) => {
  const classes = useStyles();
  const contactNameAndEmail = (title, name, email) => {
    if (!name && !email) return;
    if (!name)
      return (
        <>
          {title}: {email}
        </>
      );
    if (!email)
      return (
        <>
          {title}: {name} {email}
        </>
      );
  };
  const findingTypeAndSubType = (findingType, findingSubType) => {
    if (!findingType && !findingSubType) {
      return;
    }
    if (!findingSubType) {
      return (
        <Typography className={classes.pos} component="textSecondary">
          {findingType}
        </Typography>
      );
    } else {
      return (
        <Typography className={classes.pos} component="textSecondary">
          {findingType} - {findingSubType}
        </Typography>
      );
    }
  };
  const percentCompleted = 70;
  const waitingOnRole = "Approver 1";
  const waitingOnName = "Eric";
  const waitingOnAction = "to Approve or reject";
  return (
    <Grid item sm={12} md={6}>
      <Card raised className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>
            {contentId} {stageStatus} {riskTreatmentType} {inHerentRiskLevel}
          </Typography>
          <Typography>{finding}</Typography>
          {findingTypeAndSubType(findingType, findingSubType)}
          <Typography className={classes.pos}>
            {orgUnit} - {busUnit}
          </Typography>
          <Typography>
            {contactNameAndEmail(
              "Issue Owner",
              issueOwnerName,
              issueOwnerEmail
            )}
            {contactNameAndEmail(
              "L5 Manager",
              lFiveManagerName,
              lFiveManagerEmail
            )}
          </Typography>
        </CardContent>
        <Typography className={classes.pos}>
          Finding {percentCompleted}% Completed
          <br />
          Waiting on the {waitingOnRole} ({waitingOnName}) to {waitingOnAction}
        </Typography>
        <CardActions>
          <Modal title={"More Detials"}>
            <FindingTimeLineChart />
          </Modal>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default FindingCard;
