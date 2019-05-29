import { cloneElement } from 'react';

import Intro from './01_intro';
import Demo from './02_demo';
import End from './03_end';

const slides = [].concat(
  Intro,
  Demo,
  End
);

export default slides.map((slide, i) => cloneElement(slide(), { key: i }));
