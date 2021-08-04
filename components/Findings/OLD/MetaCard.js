import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import AccordianSection from "../../Accordians/AccordianSection";
import PieChart from "../Charts/PieChart";
import { red, green, blue, yellow, orange } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    cardActions: {
      display: "flex",
      justifyContent: "flex-end ",
      flexWrap: "wrap",
    },
  };
});
const FindingAccordianHeaderText = ({ text }) => {
  return <Typography>{text}</Typography>;
};

// "Findings Report Options"
const MetaCard = ({
  title,
  data,
  setData,
  mainData,
  filterOptions,
  setFilterOptions,
}) => {
  const classes = useStyles();
  const isValidResult = (filterParam, item) => {
    return filterOptions[filterParam][item[filterParam]];
  };
  const runFilters = () => {
    setData(
      mainData.filter((item) => {
        return (
          isValidResult("Stage Status Text", item) &&
          isValidResult("Inherent Risk Level Text", item)
        );
      })
    );
  };
  return (
    <Card raised>
      <CardHeader title={title} />
      <AccordianSection
        Summary={() => <FindingAccordianHeaderText text="Stage Status" />}
        Details={() => (
          <PieChart
            filterParam="Stage Status Text"
            labels={[
              "Stage 01 - Submit Record",
              "Stage 02 - Review Record",
              "Stage 03 - Accept Reocrd",
            ]}
            colors={[blue[500], green[500], red[500]]}
            data={data}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        )}
      />
      <AccordianSection
        Summary={() => (
          <FindingAccordianHeaderText text="Inherent Risk Level" />
        )}
        Details={() => (
          <PieChart
            filterParam="Inherent Risk Level Text"
            labels={["Low", "Medium", "High", "Very High"]}
            colors={[green[500], yellow[500], orange[500], red[500]]}
            data={data}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        )}
      />
      <CardActions className={classes.cardActions}>
        <Button onClick={() => runFilters()} variant="outlined" color="primary">
          Search
        </Button>
      </CardActions>
    </Card>
  );
};

export default MetaCard;
