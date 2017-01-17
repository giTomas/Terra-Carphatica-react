// import Color from 'color';
// import deepFreeze from 'deep-freeze';
import Prefixer from 'inline-style-prefixer';

// variables
export const colors = {
  green: 'hsl(104, 90%, 28%)',
  brown: 'hsl(46, 50%, 57%)',
  background: 'hsl(0, 0%, 93%)',
  text: {
    primary: 'hsl(0, 0%, 10%)',
    secondary: 'hsl(0, 0%, 93%)',
    lighten: 'hsl(0, 0%, 45%)',
  },
};

export const fontSize = {
  small: 0.844,
  base: 1.125,
  large_1: 1.5,
  large_2: 1.999,
  large_3: 2.665,
  large_4: 3.553,
  large_5: 4.736,
  large_6: 6.313,
};

export const baseLineHeight = 1.55;
// addUnits!!
export const verticalRhytm = (baseLineHeight * fontSize.base);
export const padding = verticalRhytm;
export const margin = verticalRhytm;
export const transition = '0.33s ease-out 0.1s';

export const fonts = {};
fonts.gentiumBookBasic = '"Gentium Book Basic", serif';
fonts.gentiumBasic = '"Gentium Basic", serif;';
fonts.oswald = '"Oswald", sans-serif';

//------------------------------------------------------------------------------

export const prefixer = new Prefixer({ userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2' });
