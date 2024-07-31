import { Content, ContextPageSize } from 'pdfmake/interfaces';

export const footerSection = (
  currentPage: number,
  pageCount: number,
  pageSize: ContextPageSize,
): Content => {
  return {
    text: `Página ${currentPage.toString()} de ${pageCount}`,
    alignment: 'right',
    fontSize: 10,
    margin: [0, 5, 35, 0],
  };
};
