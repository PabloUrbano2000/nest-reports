import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { getBarChart } from './charts/bar.chart';
import { getDonutChart } from './charts/donut.chart';
import { getLineChart } from './charts/line.chart';
import { getScatterChart } from './charts/scatter.chart';
import { footerSection } from './sections/footer.section';
import { headerSection } from './sections/header.section';

interface TopCountry {
  country: string;
  customers: number;
}

interface ReportOptions {
  title?: string;
  subTitle?: string;
  topCountries: TopCountry[];
}

export const getStatisticsReport = async (
  options: ReportOptions,
): Promise<TDocumentDefinitions> => {
  const [donutChart, lineChart, barChart, barChart2, scatterChart] =
    await Promise.all([
      getDonutChart({
        entries: options.topCountries.map((e) => ({
          label: e.country,
          value: e.customers,
        })),
        position: 'left',
      }),
      getLineChart(),
      getBarChart(),
      getBarChart(),
      getScatterChart(),
    ]);
  const docDefinition: TDocumentDefinitions = {
    pageMargins: [40, 100, 40, 60],
    header: headerSection({
      title: options.title ?? 'Estadísticas de clientes',
      subTitle: options.subTitle ?? 'Top 10 países con más clientes',
    }),
    footer: footerSection,
    content: [
      {
        columns: [
          {
            stack: [
              {
                text: '10 países con más clientes',
                bold: true,
                alignment: 'center',
                margin: [0, 0, 0, 10],
              },
              { image: donutChart, width: 320 },
            ],
          },
          {
            layout: 'lightHorizontalLines',
            width: 'auto',
            table: {
              headerRows: 1,
              widths: [100, 'auto'],
              body: [
                ['País', 'Clientes'],
                ...options.topCountries.map((c) => [c.country, c.customers]),
              ],
            },
          },
        ],
      },
      {
        image: lineChart,
        width: 500,
        margin: [0, 20],
      },
      {
        columnGap: 10,
        columns: [
          {
            image: barChart,
            width: 250,
          },
          {
            image: barChart2,
            width: 250,
          },
        ],
      },
      {
        image: scatterChart,
        width: 500,
      },
    ],
  };
  return docDefinition;
};
