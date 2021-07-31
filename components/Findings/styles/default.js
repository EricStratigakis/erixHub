import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => {
  const overDue = true;
  return {
    findingCardRoot: {
      padding: theme.spacing(3),
      border: "1px solid",
      borderColor: overDue ? red[500] : null,
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
    formControl: { margin: theme.spacing(1), minWidth: 182 },
    chipList: {
      display: "flex",
      justifyContent: "flex-end ",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(0.5),
      },
    },
    findingCardAccordianRoot: {
      width: "100%",
    },
    findingCardAccordianHeading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  };
});

export default useStyles;
