import { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportOptions {
  name: string;
}

export const getHelloWordReport = (
  options: ReportOptions,
): TDocumentDefinitions => {
  const { name } = options;

  const docDefinition: TDocumentDefinitions = {
    content: [`Hola Mundo ${name}`],
  };
  return docDefinition;
};
