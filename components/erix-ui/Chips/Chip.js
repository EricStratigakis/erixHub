import { Chip } from "@material-ui/core";

const MyChip = ({ text, color, icon }) => {
  return (
    <Chip
      variant="outlined"
      color="primary"
      label={text}
      icon={icon}
      style={{ color, borderColor: color }}
    />
  );
};

export default MyChip;
