import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    findingCardRoot: {
      padding: theme.spacing(3),
    },
    containerRoot: {
      padding: theme.spacing(3),
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
