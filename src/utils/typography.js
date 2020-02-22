import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";
import './main.css';

Wordpress2016.overrideThemeStyles = () => ({
  'h1, h2': {
    fontFamily: 'Cantana One, serif'
  }
});

delete Wordpress2016.googleFonts;

Wordpress2016.baseFontSize = '18px';
// Wordpress2016.scaleRatio = 2.5;
Wordpress2016.googleFonts = [
  {
    name: 'Cantana One',
    styles: [
      '400',
    ],
  },
  {
    name: 'Lato',
    styles: [
      '400',
      '400i',
      '700',
      '700i',
    ],
  },
];
Wordpress2016.headerFontFamily = ['Cantana One', 'serif'];
Wordpress2016.bodyFontFamily = [
  'Lato', 
  '-apple-system',
  'BlinkMacSystemFont', 
  'Helvetica',
  'Arial',
  'sans-serif',
];

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
