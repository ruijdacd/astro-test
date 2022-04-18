import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
  /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
  '*:where(:not(iframe, canvas, img, svg, video):not(svg *))': {
    all: 'unset',
    display: 'revert',
  },

  /* Preferred box-sizing value */
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  /*
  Remove list styles (bullets/numbers)
  in case you use it with normalize.css
*/
  'ol, ul': {
    listStyle: 'none',
  },

  /* For images to not be able to exceed their container */
  img: {
    maxWidth: '100%',
  },

  /* Removes spacing between cells in tables */
  table: {
    borderCollapse: 'collapse',
  },

  /* Revert the 'white-space' property for textarea elements on Safari */
  textarea: {
    whiteSpace: 'revert',
  },
});
