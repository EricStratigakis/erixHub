import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardHeader from "@material-ui/core/CardHeader";
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

const MyCard = ({ title, MyBody, MyChipList, MyActions }) => {
  const classes = useStyles();
  return (
    <Card raised>
      {MyChipList && <MyChipList />}
      <CardHeader title={title} />
      {MyBody && <MyBody />}
      <CardActions className={classes.cardActions}>
        {MyActions && <MyActions />}
      </CardActions>
    </Card>
  );
};

export default MyCard;
