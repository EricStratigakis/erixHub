import { useFindingsData } from "./FindingsDataContext";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import Container from "@material-ui/core/Container";

const getPieChartDataFromResponse = (data, filterParam) => {
  var tempDict = {};
  data.forEach((item) => {
    let x = item[filterParam];
    if (tempDict[x] === undefined) {
      tempDict[x] = 1;
    } else {
      tempDict[x] += 1;
    }
  });

  let labels = [];
  let series = [];

  for (const [key, value] of Object.entries(tempDict)) {
    labels.push(key);
    series.push(value);
  }

  return {
    labels,
    series,
  };
};

const FindingsPieChart = ({ filterParam }) => {
  const { data } = useFindingsData();
  const { labels, series } = getPieChartDataFromResponse(data, filterParam);
  const options = {
    labels,
  };
  return (
    <Container fixed maxWidth="sm">
      <Chart options={options} series={series} type="pie" width="100%" />
    </Container>
  );
};

export default FindingsPieChart;
