import image from "./assets/image.png";
import {TextBlock, ColumnsBlock, ImageBlock, TitleBlock} from './classes/blocks';

export const model = [
  new TitleBlock('Hello World from JS111', {
    tag: "h2",
    styles: {
      color: '#fff',
      padding: '1.5rem',
      'text-align': 'center',
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)'
    }
  }),
  new TextBlock('here we go with some text', {
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'font-weight': 'bold'
    }
  }),
  new ColumnsBlock([
    "App on the clean JS",
    "Will known how SOLID and OOP works",
    "JS is simple"
  ], {
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'This is an image',
  }),
];
