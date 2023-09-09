import { globalCss } from "./stitches.config";

export const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  ':focus': {
    outline: 0,
    boxShadow: '0 0 0 2px #00b373'
  },

  body: {
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: '$gray900',
    color: '$gray100',
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  }
})