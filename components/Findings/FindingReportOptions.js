import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import FindingCardAccordianSection from "./FindingCardAccordianSection";
import FindingsPieChart from "./FindingsPieChart";
import { red, green, blue, yellow, orange } from "@material-ui/core/colors";

import useStyles from "./styles/default";

const FindingAccordianHeaderText = ({ text }) => {
  return <Typography>{text}</Typography>;
};

const FindingReportOptions = () => {
  const classes = useStyles();
  return (
    <Container className={classes.containerRoot}>
      <Card raised className={classes.findingCardRoot}>
        <CardHeader title="Findings Report Options" />
        <FindingCardAccordianSection
          Summary={() => (
            <FindingAccordianHeaderText text="Stage Status Pie Chart" />
          )}
          Details={() => (
            <FindingsPieChart
              filterParam="Stage Status Text"
              labels={[
                "Stage 01 - Submit Record",
                "Stage 02 - Review Record",
                "Stage 03 - Accept Reocrd",
              ]}
              colors={[blue[500], green[500], red[500]]}
            />
          )}
        />
        <FindingCardAccordianSection
          Summary={() => (
            <FindingAccordianHeaderText text="Inherent Risk Level Pie Chart" />
          )}
          Details={() => (
            <FindingsPieChart
              filterParam="Inherent Risk Level Text"
              labels={["Low", "Medium", "High", "Very High"]}
              colors={[green[500], yellow[500], orange[500], red[500]]}
            />
          )}
        />
      </Card>
    </Container>
  );
};

export default FindingReportOptions;
