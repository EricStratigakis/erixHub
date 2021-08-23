import { CardHeader } from "@material-ui/core";
import ErixCard from "../../erix-ui/Cards/Card";
import ErixCardActions from "../../erix-ui/Cards/CardActions";

import RecordCardBody from "./RecordCardBody";
import RecordCardActions from "./RecordCardActions";
import RecordCardChipList from "./RecordCardChipList";

const RecordCard = ({ record }) => {
  return (
    <ErixCard>
      <RecordCardChipList record={record} />
      <CardHeader title={record["Content ID"]} />
      <RecordCardBody record={record} />
      <ErixCardActions>
        <RecordCardActions />
      </ErixCardActions>
    </ErixCard>
  );
};

export default RecordCard;
