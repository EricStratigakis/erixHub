import ErixCard from "../../erix-ui/Cards/Card";
import ErixCardActions from "../../erix-ui/Cards/CardActions";
import MetaCardBody from "./MetaCardBody";
import MetaCardActions from "./MetaCardActions";
import { CardHeader } from "@material-ui/core";

const MetaCard = () => {
  return (
    <ErixCard>
      <CardHeader title="Findings" />
      <MetaCardBody />
      <ErixCardActions>
        <MetaCardActions />
      </ErixCardActions>
    </ErixCard>
  );
};

export default MetaCard;
