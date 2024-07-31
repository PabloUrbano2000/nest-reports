import { countries as Country } from '@prisma/client';
import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { footerSection } from './sections/footer.section';
import { headerSection } from './sections/header.section';

interface ReportOptions {
  title?: string;
  subtitle?: string;
  countries: Country[];
}

export const getCountriesReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { title, subtitle, countries } = options;

  return {
    pageOrientation: 'landscape',
    header: headerSection({
      title: title || 'Contries Report',
      subTitle: subtitle || 'List of countries',
    }),
    footer: function (currentPage, pageCount, pageSize) {
      return footerSection(currentPage, pageCount, pageSize);
    },
    pageMargins: [40, 110, 40, 60],
    content: [
      {
        // layout: 'lightHorizontalLines', // optional
        layout: 'customLayout01',
        table: {
          // headers are automatically repeated if the table spans over multiple pages
          // you can declare how many rows should be treated as headers
          headerRows: 1,
          widths: [50, 50, 70, '*', 'auto', '*'],
          body: [
            ['ID', 'ISO2', 'ISO3', 'Name', 'Continent', 'Local Name'],
            ...countries.map((country) => [
              country.id.toString(),
              country.iso2,
              country.iso3,
              { text: country.name, bold: true },
              country.continent,
              country.local_name,
            ]),
            ['', '', '', '', '', ''],
            [
              '',
              '',
              '',
              '',
              { text: 'Total', bold: true },
              { text: `${countries.length} países`, bold: true },
            ],
          ],
        },
      },
      // Tabla de totales
      {
        text: 'Totales',
        style: {
          fontSize: 18,
          bold: true,

          margin: [0, 40, 0, 0],
        },
      },
      {
        layout: 'noBorders',
        table: {
          headerRows: 1,
          widths: [50, 50, 70, '*', 'auto', '*'],
          body: [
            [
              { text: 'Total de países', colSpan: 2, bold: true },
              {},
              { text: `${countries.length.toString()} países`, bold: true },
              {},
              {},
              {},
            ],
          ],
        },
      },
    ],
  };
};
