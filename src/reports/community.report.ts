import { TDocumentDefinitions } from 'pdfmake/interfaces';

export const getCommunityReport = (): TDocumentDefinitions => {
  const docDefinition: TDocumentDefinitions = {
    defaultStyle: {
      fontSize: 10,
    },
    content: [
      {
        // Logo - Dirección - Número de orden
        columns: [
          { image: 'src/assets/tucan-code-logo.png', width: 50 },
          {
            alignment: 'center',
            text: `Forest Admin Community SAP\nRUT: 44.123.1233\nCamino de la serpiente\nTeléfono: 323.34.33.33`,
          },
          {
            layout: 'borderBlue',
            alignment: 'right',
            width: 140,
            table: {
              body: [
                [
                  {
                    layout: 'noBorders',
                    table: {
                      body: [
                        ['No. Fac:', '123-456'],
                        ['Fecha:', '2021-09-01'],
                        ['Versión:', '2024-223'],
                      ],
                    },
                  },
                ],
              ],
            },
          },
        ],
      },

      // Horizontal Line
      {
        margin: [0, 5],
        canvas: [
          {
            type: 'line',
            x1: 0,
            y1: 5,
            x2: 515,
            y2: 5,
            lineWidth: 2,
            lineColor: '#3A4546',
          },
        ],
      },

      // Detalles del cliente
      {
        table: {
          widths: ['auto', '*', 'auto', '*'],
          body: [
            [
              {
                text: 'Datos del cliente',
                fillColor: '#5775e1',
                color: 'white',
                colSpan: 4,
                border: [false, true, false, false],
              },
              {},
              {},
              {},
            ],

            // Razón social
            [
              {
                text: 'Razón social',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Nombre de la empresa',
                fillColor: 'white',
              },
              {
                text: 'Dirección',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Calle falsa 123',
                fillColor: 'white',
              },
            ],
            // RUT
            [
              {
                text: 'RUT',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
              {
                text: 'Teléfono',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '999-999-999',
                fillColor: 'white',
              },
            ],
            // Giro
            [
              {
                text: 'Giro',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: '',
                fillColor: 'white',
              },
              {
                text: 'Dirección de pago',
                fillColor: '#343a40',
                color: 'white',
                bold: true,
              },
              {
                text: 'Otra dirección falsa',
                fillColor: 'white',
              },
            ],
          ],
        },
      },
    ],
  };
  return docDefinition;
};
