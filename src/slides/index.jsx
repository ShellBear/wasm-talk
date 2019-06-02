import { cloneElement } from 'react';

import Intro from './01_intro';
import Demo from './02_demo';
import Usage from './03_usage';
import End from './04_end';

const slides = [].concat(
  Intro,
  Demo,
  Usage,
  End
);

export default slides.map((slide, i) => cloneElement(slide(), { key: i }));
