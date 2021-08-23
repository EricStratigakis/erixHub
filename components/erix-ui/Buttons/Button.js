import { Button } from "@material-ui/core";

const MyButton = ({ onClick, children }) => {
  return (
    <Button variant="outlined" color="primary" onClick={onClick}>
      {children}
    </Button>
  );
};

export default MyButton;
