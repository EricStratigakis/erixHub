import { makeStyles, CardActions } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    cardActions: {
      display: "flex",
      justifyContent: "flex-end",
      flexWrap: "wrap",
    },
  };
});

const ErixCardActions = ({ children }) => {
  const classes = useStyles();
  return <CardActions className={classes.cardActions}>{children}</CardActions>;
};

export default ErixCardActions;
