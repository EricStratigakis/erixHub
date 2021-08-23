import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { Container } from "@material-ui/core";
import { useFindingsData } from "../data/Context";
import FilterCheckBoxes from "../../erix-ui/Fields/FilterCheckBoxes";

const getPieChartDataFromResponse = ({ data, filterParam, labels }) => {
  let series = new Array(labels.length).fill(0);
  data.forEach((item) => {
    series[labels.indexOf(item[filterParam])];
  });
  return series;
};

const FilterPieChart = ({ filterParam, labels, colors }) => {
  const { data, filterOptions } = useFindingsData();
  const series = getPieChartDataFromResponse({ data, labels, filterParam });
  const options = {
    labels,
    colors,
    chart: { animations: { enabled: false } },
    tooltip: { enabled: false },
    dataLabels: { enabled: true },
    legend: { show: false },
  };
  return (
    <Container fixed maxWidth="sm">
      <FilterCheckBoxes
        filterParam={filterParam}
        series={series}
        colors={colors}
        options={labels}
        filterOptions={filterOptions}
      />
      <Chart options={options} series={series} type="pie" width="100%" />
    </Container>
  );
};

export default FilterPieChart;
