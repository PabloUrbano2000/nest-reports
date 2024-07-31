import { Content } from 'pdfmake/interfaces';
import { DateFormatter } from 'src/helpers';

interface HeaderOptions {
  title?: string;
  subTitle?: string;
  showLogo?: boolean;
  showDate?: boolean;
}

const logo: Content = {
  image: 'src/assets/tucan-code-logo.png',
  width: 100,
  height: 100,
  alignment: 'center',
  margin: [0, 0, 0, 20],
};

const currentDate: Content = {
  text: `${DateFormatter.getDDMMMMYYYY(new Date())}`,
  alignment: 'right',
  margin: [20, 20],
  width: 100,
  fontSize: 10,
};

export const headerSection = (options: HeaderOptions): Content => {
  const { title, subTitle, showLogo = true, showDate = true } = options;

  const headerLogo: Content = showLogo ? logo : null;

  const headerDate: Content = showDate ? currentDate : null;

  const headerSubtitle: Content = subTitle
    ? {
        text: title,
        margin: [0, 2, 0, 0],
        alignment: 'center',
        style: {
          // bold: true,
          fontSize: 16,
        },
      }
    : null;

  const headerTitle: Content = title
    ? {
        stack: [
          {
            text: title,
            margin: [0, 15, 0, 0],
            alignment: 'center',
            style: {
              bold: true,
              fontSize: 22,
            },
          },
          headerSubtitle,
        ],
      }
    : null;

  return {
    columns: [headerLogo, headerTitle, headerDate],
  };
};
