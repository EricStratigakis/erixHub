import { useFindingsData } from "./FindingsDataContext";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import Container from "@material-ui/core/Container";

import FindingsCheckBoxes from "./FindingsCheckBoxes";

const getPieChartDataFromResponse = (data, filterParam, labels) => {
  var series = new Array(labels.length).fill(0);
  data.forEach((item) => {
    series[labels.indexOf(item[filterParam])] += 1;
  });
  return series;
};

const FindingsPieChart = ({ filterParam, labels, colors }) => {
  const { data } = useFindingsData();
  const series = getPieChartDataFromResponse(data, filterParam, labels);
  const options = {
    labels,
    colors,
    chart: {
      animations: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    dataLabels: {
      enabled: true,
    },
    legend: {
      show: false,
      onItemClick: {
        toggleDataSeries: false,
      },
      onItemHover: {
        highlightDataSeries: false,
      },
      position: "top",
    },
  };
  return (
    <Container fixed maxWidth="sm">
      <FindingsCheckBoxes
        filterParam={filterParam}
        colors={colors}
        options={labels}
      />
      <Chart options={options} series={series} type="pie" width="100%" />
    </Container>
  );
};

export default FindingsPieChart;
