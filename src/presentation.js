import 'normalize.css';
import React from 'react';
import { Deck } from 'spectacle';

import createTheme from 'spectacle/lib/themes/default';
import Slides from './slides';

const theme = createTheme(
  {
    'primary': '#111122',
    'secondary': '#4C2E4B',
    'tertiary': '#954B62',
    'quaternary': '#D57464',
    'quinary': '#FAB05E',
    'senary': '#F9F871',
    'shade-1': '#C8C8DF',
    'shade-2': '#9595AB',
    'shade-3': '#65657A',
    'shade-4': '#39394C',
    'shade-5': '#342E45',
    'blue': '#6E87FF',
    'green': '#5BECC0',
    'yellow': '#FFF7D6',
    'pink': '#EFB6D7'
  },
  {
    'primary': 'Montserrat',
    'secondary': 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress="bar"
        style={{}}
      >
        { Slides }
      </Deck>
    );
  }
}
