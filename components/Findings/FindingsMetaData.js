import { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import FindingCardAccordianSection from "./FindingCardAccordianSection";
import FindingsPieChart from "./FindingsPieChart";
import { red, green, blue, yellow, orange } from "@material-ui/core/colors";
import useStyles from "./styles/default";
import { useFindingsData } from "./FindingsDataContext";

const FindingAccordianHeaderText = ({ text }) => {
  return <Typography>{text}</Typography>;
};

const FindingsMetaData = () => {
  const classes = useStyles();
  const { runFilters } = useFindingsData();
  const handleApply = () => {
    runFilters();
  };

  return (
    <Container className={classes.containerRoot}>
      <Card raised className={classes.findingCardRoot}>
        <CardHeader title="Findings Report Options" />
        <FindingCardAccordianSection
          Summary={() => <FindingAccordianHeaderText text="Stage Status" />}
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
            <FindingAccordianHeaderText text="Inherent Risk Level" />
          )}
          Details={() => (
            <FindingsPieChart
              filterParam="Inherent Risk Level Text"
              labels={["Low", "Medium", "High", "Very High"]}
              colors={[green[500], yellow[500], orange[500], red[500]]}
            />
          )}
        />
        <CardActions>
          <Button onClick={handleApply} variant="outlined" color="primary">
            Apply
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default FindingsMetaData;
