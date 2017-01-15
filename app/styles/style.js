import Color from 'color';
import deepFreeze from 'deep-freeze';
import Prefixer from 'inline-style-prefixer';
import { addUnits } from '../helpers/helpers';

// variables
const colors = {};
colors.green = 'hsl(104, 90%, 28%)';
colors.brown = 'hsl(46, 50%, 57%)';
colors.background = 'hsl(0, 0%, 93%)';
colors.text.primary = 'hsl(0, 0%, 10%)';
colors.text.secondary = 'hsl(0, 0%, 93%)';
colors.text.lighten = 'hsl(0, 0%, 45%)';

const fontSize = {
  small: 0.844,
  base: 1.125,
  large_1: 1.5,
  large_2: 1.999,
  large_3: 2.665,
  large_4: 3.553,
  large_5: 4.736,
  large_6: 6.313,
};

const baseLineHeight = 1.5
//addUnits!!
const verticalRhytm = (baseLineHeight + fontSize.base);
const padding = verticalRhytm;
const margin = verticalRhytm;

const transition = '0.22s ease-out 0.1s';

//------------------------------------------------------------------------------

const unprefixed = {};

unprefixed.banner = {
  backgroundColor: 'blue',
};

const prefixer = new Prefixer({ userAgent: 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Chrome/25.0.1216.0 Safari/537.2' });

const style = deepFreeze(prefixer.prefix(unprefixed));


export default style;
