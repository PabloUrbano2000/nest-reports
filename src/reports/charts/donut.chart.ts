import * as Utils from 'src/helpers/chart-utils';

interface DonutEntry {
  label: string;
  value: number;
}
interface DonutOptions {
  position?: 'left' | 'right' | 'top' | 'bottom';
  entries: DonutEntry[];
}

export const getDonutChart = async (options: DonutOptions): Promise<string> => {
  const { entries, position = 'top' } = options;
  const data = {
    labels: entries.map((e) => e.label),
    datasets: [
      {
        label: 'Dataset 1',
        data: entries.map((e) => e.value),
      },
    ],
  };
  const config = {
    type: 'doughnut',
    data: data,
    options: {
      legend: {
        position,
      },
      // title: {
      //   text: 'Chart.js Doughnut Chart',
      //   display: true,
      // },
      plugins: {
        datalabels: {
          color: 'white',
          font: {
            weight: 'bold',
            size: 14,
          },
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
