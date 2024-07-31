import * as Utils from 'src/helpers/chart-utils';

export const getScatterChart = async (): Promise<string> => {
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, rmin: 1, rmax: 1, min: 0, max: 100 };

  const data = {
    datasets: [
      {
        label: 'Dataset 1',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.NAMED_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.NAMED_COLORS.red, 0.5),
      },
      {
        label: 'Dataset 2',
        data: Utils.bubbles(NUMBER_CFG),
        borderColor: Utils.NAMED_COLORS.orange,
        backgroundColor: Utils.transparentize(Utils.NAMED_COLORS.orange, 0.5),
      },
    ],
  };

  const config = {
    type: 'scatter',
    data: data,
    options: {
      title: {
        display: true,
        text: 'Ventas de calor',
      },
      plugins: {
        legend: {
          position: 'top',
        },
      },
    },
  };

  return Utils.chartJsToImage(config);
};
