import { useState } from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Button from "../components/erix-ui/Buttons/Button";
import randomProperty from "../utils/selecetRandomDictItem";
import seenData from "../components/TheOracle/data/seenTest.json";
import allSPData from "../components/TheOracle/data/allSp.json";

const TheOracle = () => {
  const [sp, setSp] = useState(allSPData);
  const [seen, setSeen] = useState(seenData);

  const filterBySeen = () => {
    let res = {};
    for (const [key, value] of Object.entries(sp)) {
      if (!seen.includes(key)) {
        res[key] = value;
      }
    }
    return res;
  };

  const [mySP, setMySP] = useState(filterBySeen());
  const [currEpisode, setCurrEpisode] = useState("N/A");

  const hadelOrcaleConsultation = () => {
    let p = randomProperty(mySP);
    console.log(p);
    setCurrEpisode(p);
  };

  return (
    <div>
      <h1>The Oracle</h1>
      <Button onClick={hadelOrcaleConsultation}>Consult The Oracle</Button>
      {currEpisode !== "N/A" && (
        <>
          <h1>The Oracle Has spoken!</h1>
          <h2>
            You are to consume season {currEpisode["s"]} episode{" "}
            {currEpisode["n"]} : {currEpisode["t"]}
          </h2>
        </>
      )}
    </div>
  );
};

export default withPageAuthRequired(TheOracle);
