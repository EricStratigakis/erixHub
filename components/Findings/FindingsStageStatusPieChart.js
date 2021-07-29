import { useFindingsData } from "./FindingsDataContext";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import Container from "@material-ui/core/Container";

const getPieChartDataFromResponse = (data) => {
  var stageStatus = {};
  data.forEach((item) => {
    let ss = item["stageStatus"];
    if (stageStatus[ss] === undefined) {
      stageStatus[ss] = 1;
    } else {
      stageStatus[ss] += 1;
    }
  });

  let labels = [];
  let series = [];

  for (const [key, value] of Object.entries(stageStatus)) {
    labels.push(key);
    series.push(value);
  }

  return {
    labels,
    series,
  };
};

const FindingsStageStatusPieChart = () => {
  const { data } = useFindingsData();
  const { labels, series } = getPieChartDataFromResponse(data);
  const options = {
    labels,
  };
  return (
    <Container fixed maxWidth="sm">
      <Chart options={options} series={series} type="pie" width="100%" />
    </Container>
  );
};

export default FindingsStageStatusPieChart;
